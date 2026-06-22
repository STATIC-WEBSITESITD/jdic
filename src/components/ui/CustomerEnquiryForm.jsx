import { useState } from 'react';
import CustomBtn from './CustomBtn';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxNCOOGSVxjuwXIFt9RmtE3_uqrZq9WI6xBTozpzZ6t83dAhoaQUfXJnh96_aEBEq0J/exec';
const SHEET_MAPPED_FIELDS = [
  'customer_name',
  'contact_number',
  'company_name',
  'pickup_location',
  'pickup_zip_code',
  'destination',
  'destination_zip_code',
  'packages',
  'actual_weight',
  'volumetric_weight',
  'contents',
  'remarks',
];
const WEIGHT_UNITS = ['KG', 'LB', 'G'];
const DIM_UNITS = ['cm', 'in', 'm'];

function createPackage() {
  return {
    id: crypto.randomUUID(),
    qty: 1,
    weight: '',
    weightUnit: 'KG',
    dimL: '',
    dimW: '',
    dimH: '',
    dimUnit: 'cm',
  };
}

function formatActualWeight(weight, unit) {
  const value = weight === '' || weight == null ? '' : String(weight);
  return value !== '' ? `${value} ${unit}` : '';
}

function calcVolumetric(dimL, dimW, dimH, unit) {
  const l = parseFloat(dimL) || 0;
  const w = parseFloat(dimW) || 0;
  const h = parseFloat(dimH) || 0;
  if (!l || !w || !h) return '';

  let kg = 0;
  if (unit === 'cm') kg = (l * w * h) / 5000;
  else if (unit === 'in') kg = (l * w * h) / 139;
  else if (unit === 'm') kg = l * w * h * 200;

  return `${kg.toFixed(2)} KG`;
}

function buildSheetRow(formValues, pkg, isFirstRow) {
  const row = {};

  if (isFirstRow) {
    row.customer_name = formValues.customer_name ?? '';
    row.contact_number = formValues.contact_number ?? '';
    row.company_name = formValues.company_name ?? '';
    row.pickup_location = formValues.pickup_location ?? '';
    row.pickup_zip_code = formValues.pickup_zip_code ?? '';
    row.destination = formValues.destination ?? '';
    row.destination_zip_code = formValues.destination_zip_code ?? '';
    row.contents = formValues.contents ?? '';
    row.remarks = formValues.remarks ?? '';
  } else {
    SHEET_MAPPED_FIELDS.forEach((name) => row[name] = '');
  }

  row.Packages = pkg.qty == null ? '' : String(pkg.qty);
  row.actual_weight = formatActualWeight(pkg.weight, pkg.weightUnit);
  row.volumetric_weight = calcVolumetric(pkg.dimL, pkg.dimW, pkg.dimH, pkg.dimUnit);

  return row;
}

async function postRow(row) {
  const formData = new FormData();
  Object.keys(row).forEach((key) => {
    formData.set(key, row[key] == null ? '' : String(row[key]));
  });

  const response = await fetch(SCRIPT_URL, { method: 'POST', body: formData });
  if (!response.ok) {
    throw new Error('Submission failed');
  }
}

function buildEmailPayload(formValues, packageList) {
  return {
    date: new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }),
    customer_name: formValues.customer_name ?? '',
    contact_number: formValues.contact_number ?? '',
    company_name: formValues.company_name ?? '',
    pickup_location: formValues.pickup_location ?? '',
    pickup_zip_code: formValues.pickup_zip_code ?? '',
    destination: formValues.destination ?? '',
    destination_zip_code: formValues.destination_zip_code ?? '',
    contents: formValues.contents ?? '',
    remarks: formValues.remarks ?? '',
    packages: packageList.map((pkg) => ({
      qty: pkg.qty == null ? '' : String(pkg.qty),
      actual_weight: formatActualWeight(pkg.weight, pkg.weightUnit),
      volumetric_weight: calcVolumetric(pkg.dimL, pkg.dimW, pkg.dimH, pkg.dimUnit),
    })),
  };
}

async function postEmail(payload) {
  const response = await fetch('http://localhost:3000/api/customer-enquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Email submission failed');
  }
}

function PackageBlock({ index, pkg, canRemove, onChange, onRemove }) {
  const volumetric = calcVolumetric(pkg.dimL, pkg.dimW, pkg.dimH, pkg.dimUnit);
  const actualWeight = formatActualWeight(pkg.weight, pkg.weightUnit);

  const update = (field, value) => {
    onChange(pkg.id, { ...pkg, [field]: value });
  };

  return (
    <div className="package-block">
      <div className="row align-items-center mb-3">
        <div className="col-6">
          <h6 className="package-title mb-0">Package {index + 1}</h6>
        </div>
        <div className="col-6 text-end">
          {canRemove && (
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(pkg.id)}
            >
              <i className="fas fa-trash" /> Remove Package
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-2">
          <div className="form-group">
            <input
              type="number"
              name={`pkg_qty_${index}`}
              min="1"
              step="1"
              value={pkg.qty}
              className="form-control"
              onChange={(e) => update('qty', e.target.value)}
            />
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="form-group">
            <div className="enquiry-input-group">
              <input
                type="number"
                name={`pkg_weight_${index}`}
                min="0"
                step="any"
                value={pkg.weight}
                placeholder="Package Weight"
                className="form-control"
                onChange={(e) => update('weight', e.target.value)}
              />
              <select
                name={`pkg_weight_unit_${index}`}
                value={pkg.weightUnit}
                className="form-control"
                onChange={(e) => update('weightUnit', e.target.value)}
              >
                {WEIGHT_UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <input type="hidden" name={`pkg_actual_weight_${index}`} value={actualWeight} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <div className="enquiry-dim-inputs">
              <input
                type="number"
                name={`pkg_dim_l_${index}`}
                min="0"
                step="any"
                value={pkg.dimL}
                placeholder="Length"
                aria-label="Length"
                className="form-control"
                onChange={(e) => update('dimL', e.target.value)}
              />
              <span className="text-muted">×</span>
              <input
                type="number"
                name={`pkg_dim_w_${index}`}
                min="0"
                step="any"
                value={pkg.dimW}
                placeholder="Width"
                aria-label="Width"
                className="form-control"
                onChange={(e) => update('dimW', e.target.value)}
              />
              <span className="text-muted">×</span>
              <input
                type="number"
                name={`pkg_dim_h_${index}`}
                min="0"
                step="any"
                value={pkg.dimH}
                placeholder="Height"
                aria-label="Height"
                className="form-control"
                onChange={(e) => update('dimH', e.target.value)}
              />
              <select
                name={`pkg_dim_unit_${index}`}
                value={pkg.dimUnit}
                aria-label="Dimension unit"
                className="form-control"
                onChange={(e) => update('dimUnit', e.target.value)}
              >
                {DIM_UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <input type="hidden" name={`volumetric_weight_${index}`} value={volumetric} />
            {volumetric && (
              <small className="text-muted d-block mt-2">Volumetric weight: {volumetric}</small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomerEnquiryForm() {
  const [packages, setPackages] = useState([createPackage()]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePackage = (id, nextPkg) => {
    setPackages((current) => current.map((pkg) => (pkg.id === id ? nextPkg : pkg)));
  };

  const addPackage = () => {
    setPackages((current) => [...current, createPackage()]);
  };

  const removePackage = (id) => {
    setPackages((current) => current.filter((pkg) => pkg.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!packages.length) {
      alert('Please add at least one package.');
      return;
    }

    const formValues = Object.fromEntries(new FormData(form));

    setIsSubmitting(true);

    try {
      for (let index = 0; index < packages.length; index += 1) {
        await postRow(buildSheetRow(formValues, packages[index], index === 0));
      }

      await postEmail(buildEmailPayload(formValues, packages));

      form.reset();
      setPackages([createPackage()]);

      setTimeout(() => {
        alert('Thank you for your enquiry. We will contact you shortly.');
      }, 1000);
    } catch (error) {
      alert(`Error! ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="light-v">
      <section className="contact-p pt-100 cstm_form customer-enquiry-form">
        <div className="container" data-aos="fade-up">
          <div className="cstm_title">
            <h4 className="text-center mb-30">
              Customer <span style={{ color: 'var(--primary)' }}>Enquiry</span>
            </h4>
            <p className="text-center mb-0">Share shipment details and get a tailored quote for your international courier needs.</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-box">
                <form id="enquiryForm" className="form" onSubmit={handleSubmit}>
                  <div className="row input__wrap controls">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="customer_name"
                          id="customer_name"
                          placeholder="Customer Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="contact_number"
                          id="contact_number"
                          placeholder="Contact Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="company_name"
                          id="company_name"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="pickup_location"
                          id="pickup_location"
                          placeholder="Pickup Location"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="pickup_zip_code"
                          id="pickup_zip_code"
                          placeholder="Pickup Zip Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="destination"
                          id="destination"
                          placeholder="Destination"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="destination_zip_code"
                          id="destination_zip_code"
                          placeholder="Destination Zip Code"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div id="packagesContainer" className="packages-container">
                        {packages.map((pkg, index) => (
                          <PackageBlock
                            key={pkg.id}
                            index={index}
                            pkg={pkg}
                            canRemove={packages.length > 1}
                            onChange={updatePackage}
                            onRemove={removePackage}
                          />
                        ))}
                      </div>
                      <div className="mt-3 mb-3">
                        <button
                          id="addAnotherPackage"
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={addPackage}
                        >
                          <i className="fas fa-plus" /> Add Another Package
                        </button>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="contents"
                          id="contents"
                          placeholder="Contents/HSN Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="remarks"
                          id="remarks"
                          className="form-control"
                          placeholder="Remarks"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <CustomBtn
                        type="submit"
                        label={isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
