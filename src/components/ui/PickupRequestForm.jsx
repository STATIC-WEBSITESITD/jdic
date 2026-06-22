import { pickupRequestSection } from '../../data/home';
import CustomBtn from './CustomBtn';

const { title, titleAccent, subtitle, buttonLabel = 'Submit Pickup Request' } = pickupRequestSection;

export default function PickupRequestForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = {
      shipperContactName: form.shipperContactName.value,
      shipperEmail: form.shipperEmail.value,
      shipperMobile: form.shipperMobile.value,
      shipperCountry: form.shipperCountry.value,
      shipperState: form.shipperState.value,
      shipperCity: form.shipperCity.value,
      shipperZip: form.shipperZip.value,
      shipperAddress: form.shipperAddress.value,
      estimatedWeight: form.estimatedWeight.value,
      pickupDate: form.pickupDate.value,
      productType: form.productType.value,
      consigneeContactName: form.consigneeContactName.value,
      consigneeEmail: form.consigneeEmail.value,
      consigneeMobile: form.consigneeMobile.value,
      consigneeCountry: form.consigneeCountry.value,
      consigneeState: form.consigneeState.value,
      consigneeCity: form.consigneeCity.value,
      consigneeZip: form.consigneeZip.value,
      consigneeAddress: form.consigneeAddress.value,
      referenceName: form.referenceName.value,
    };

    try {
      const response = await fetch('/api/pickup-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log('API Response:', result);

      if (result.success) {
        alert('Form submitted successfully');
        form.reset();
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="light-v">
      <section className="contact-p pt-100 pb-100 cstm_form">
        <div className="container" data-aos="fade-up">
          <div className="cstm_title">
            <h4 className="text-center mb-30">
              {title} <span style={{ color: 'var(--primary)' }}>{titleAccent}</span>
            </h4>
            <p className="text-center mb-0">{subtitle}</p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="form-box">
                <form id="PickupRequestForm" className="form" onSubmit={handleSubmit} autoComplete="off">
                  <div className="pickup-section">
                    <div className="card-header mb-30">
                      <p className="mb-1">Where we collect</p>
                      <h5>1. Pickup Location (Shipper)</h5>
                    </div>
                    <div className="row input__wrap controls">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="text" name="shipperContactName" id="shipperContactName" placeholder="Contact Name" required
                            data-error="Contact Name is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="email" name="shipperEmail" id="shipperEmail" placeholder="Email" required
                            data-error="Valid email is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="tel" name="shipperMobile" id="shipperMobile" placeholder="Mobile Number" required
                            data-error="Mobile number is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select id="shipperCountry" name="shipperCountry" defaultValue="" required
                            data-error="Country Name is required.">
                            <option value="" disabled>Select Country…</option>
                            {[
                              "Afghanistan",
                              "Albania",
                              "Algeria",
                              "Andorra",
                              "Angola",
                              "Antigua & Barbuda",
                              "Argentina",
                              "Armenia",
                              "Australia",
                              "Austria",
                              "Azerbaijan",
                              "Bahamas",
                              "Bahrain",
                              "Bangladesh",
                              "Barbados",
                              "Belarus",
                              "Belgium",
                              "Belize",
                              "Benin",
                              "Bhutan",
                              "Bolivia",
                              "Bosnia & Herzegovina",
                              "Botswana",
                              "Brazil",
                              "Brunei",
                              "Bulgaria",
                              "Burkina Faso",
                              "Burundi",
                              "Cabo Verde",
                              "Cambodia",
                              "Cameroon",
                              "Canada",
                              "Central African Republic",
                              "Chad",
                              "Chile",
                              "China",
                              "Colombia",
                              "Comoros",
                              "Congo",
                              "Congo (DRC)",
                              "Costa Rica",
                              "Croatia",
                              "Cuba",
                              "Cyprus",
                              "Czech Republic",
                              "Denmark",
                              "Djibouti",
                              "Dominica",
                              "Dominican Republic",
                              "Ecuador",
                              "Egypt",
                              "El Salvador",
                              "Equatorial Guinea",
                              "Eritrea",
                              "Estonia",
                              "Eswatini",
                              "Ethiopia",
                              "Fiji",
                              "Finland",
                              "France",
                              "Gabon",
                              "Gambia",
                              "Georgia",
                              "Germany",
                              "Ghana",
                              "Greece",
                              "Grenada",
                              "Guatemala",
                              "Guinea",
                              "Guinea-Bissau",
                              "Guyana",
                              "Haiti",
                              "Honduras",
                              "Hong Kong",
                              "Hungary",
                              "Iceland",
                              "India",
                              "Indonesia",
                              "Iran",
                              "Iraq",
                              "Ireland",
                              "Israel",
                              "Italy",
                              "Jamaica",
                              "Japan",
                              "Jordan",
                              "Kazakhstan",
                              "Kenya",
                              "Kiribati",
                              "Kuwait",
                              "Kyrgyzstan",
                              "Laos",
                              "Latvia",
                              "Lebanon",
                              "Lesotho",
                              "Liberia",
                              "Libya",
                              "Liechtenstein",
                              "Lithuania",
                              "Luxembourg",
                              "Macao",
                              "Madagascar",
                              "Malawi",
                              "Malaysia",
                              "Maldives",
                              "Mali",
                              "Malta",
                              "Marshall Islands",
                              "Mauritania",
                              "Mauritius",
                              "Mexico",
                              "Micronesia",
                              "Moldova",
                              "Monaco",
                              "Mongolia",
                              "Montenegro",
                              "Morocco",
                              "Mozambique",
                              "Myanmar",
                              "Namibia",
                              "Nauru",
                              "Nepal",
                              "Netherlands",
                              "New Zealand",
                              "Nicaragua",
                              "Niger",
                              "Nigeria",
                              "Norway",
                              "Oman",
                              "Pakistan",
                              "Palau",
                              "Panama",
                              "Papua New Guinea",
                              "Paraguay",
                              "Peru",
                              "Philippines",
                              "Poland",
                              "Portugal",
                              "Qatar",
                              "Romania",
                              "Russia",
                              "Rwanda",
                              "Saint Kitts & Nevis",
                              "Saint Lucia",
                              "Saint Vincent & Grenadines",
                              "Samoa",
                              "San Marino",
                              "São Tomé & Príncipe",
                              "Saudi Arabia",
                              "Senegal",
                              "Serbia",
                              "Seychelles",
                              "Sierra Leone",
                              "Singapore",
                              "Slovakia",
                              "Slovenia",
                              "Solomon Islands",
                              "Somalia",
                              "South Africa",
                              "South Sudan",
                              "Spain",
                              "Sri Lanka",
                              "Sudan",
                              "Suriname",
                              "Sweden",
                              "Switzerland",
                              "Syria",
                              "Taiwan",
                              "Tajikistan",
                              "Tanzania",
                              "Thailand",
                              "Timor-Leste",
                              "Togo",
                              "Tonga",
                              "Trinidad & Tobago",
                              "Tunisia",
                              "Turkey",
                              "Turkmenistan",
                              "Tuvalu",
                              "Uganda",
                              "Ukraine",
                              "United Arab Emirates",
                              "United Kingdom",
                              "United States",
                              "Uruguay",
                              "Uzbekistan",
                              "Vanuatu",
                              "Venezuela",
                              "Vietnam",
                              "Yemen",
                              "Zambia",
                              "Zimbabwe"
                            ].map((country) =>
                              <option key={country} value={country}>{country}</option>
                            )}
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="shipperState" id="shipperState" placeholder="State" required
                            data-error="State is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="shipperCity" id="shipperCity" placeholder="City" required
                            data-error="City is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="shipperZip" id="shipperZip" placeholder="Zip / Postal Code" required
                            data-error="Zip / Postal Code is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea name="shipperAddress" id="shipperAddress" className="form-control" placeholder="Address" required
                            data-error="Address is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <input type="number" min="0" name="estimatedWeight" id="estimatedWeight"
                            placeholder="Estimated Weight (kg)" required data-error="Estimated Weight is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <input type="date" name="pickupDate" id="pickupDate" placeholder="Pickup Date" required
                            data-error="Pickup Date is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <select id="productType" name="productType" defaultValue="" required
                            data-error="Product Type is required.">
                            <option value="" disabled>Select…</option>
                            <option value="DOX">DOX</option>
                            <option value="SPX Documents">SPX Documents</option>
                            <option value="Parcel (Non Documents)">Parcel (Non Documents)</option>
                            <option value="Medicines">Medicines</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Others">Others</option>
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <input type="text" name="referenceName" id="referenceName" placeholder="Reference Name" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="pickup-section">
                    <div className="card-header mb-30">
                      <p className="mb-1">Where we deliver</p>
                      <h5>2. Drop Off Location (Consignee)</h5>
                    </div>
                    <div className="row input__wrap controls">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="text" name="consigneeContactName" id="consigneeContactName" placeholder="Contact Name" required
                            data-error="Contact Name is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="email" name="consigneeEmail" id="consigneeEmail" placeholder="Email" required
                            data-error="Valid email is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input type="tel" name="consigneeMobile" id="consigneeMobile" placeholder="Mobile Number" required
                            data-error="Mobile number is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select id="consigneeCountry" name="consigneeCountry" defaultValue="" required
                            data-error="Country Name is required.">
                            <option value="" disabled>Select Country…</option>
                            {[
                              "Afghanistan",
                              "Albania",
                              "Algeria",
                              "Andorra",
                              "Angola",
                              "Antigua & Barbuda",
                              "Argentina",
                              "Armenia",
                              "Australia",
                              "Austria",
                              "Azerbaijan",
                              "Bahamas",
                              "Bahrain",
                              "Bangladesh",
                              "Barbados",
                              "Belarus",
                              "Belgium",
                              "Belize",
                              "Benin",
                              "Bhutan",
                              "Bolivia",
                              "Bosnia & Herzegovina",
                              "Botswana",
                              "Brazil",
                              "Brunei",
                              "Bulgaria",
                              "Burkina Faso",
                              "Burundi",
                              "Cabo Verde",
                              "Cambodia",
                              "Cameroon",
                              "Canada",
                              "Central African Republic",
                              "Chad",
                              "Chile",
                              "China",
                              "Colombia",
                              "Comoros",
                              "Congo",
                              "Congo (DRC)",
                              "Costa Rica",
                              "Croatia",
                              "Cuba",
                              "Cyprus",
                              "Czech Republic",
                              "Denmark",
                              "Djibouti",
                              "Dominica",
                              "Dominican Republic",
                              "Ecuador",
                              "Egypt",
                              "El Salvador",
                              "Equatorial Guinea",
                              "Eritrea",
                              "Estonia",
                              "Eswatini",
                              "Ethiopia",
                              "Fiji",
                              "Finland",
                              "France",
                              "Gabon",
                              "Gambia",
                              "Georgia",
                              "Germany",
                              "Ghana",
                              "Greece",
                              "Grenada",
                              "Guatemala",
                              "Guinea",
                              "Guinea-Bissau",
                              "Guyana",
                              "Haiti",
                              "Honduras",
                              "Hong Kong",
                              "Hungary",
                              "Iceland",
                              "India",
                              "Indonesia",
                              "Iran",
                              "Iraq",
                              "Ireland",
                              "Israel",
                              "Italy",
                              "Jamaica",
                              "Japan",
                              "Jordan",
                              "Kazakhstan",
                              "Kenya",
                              "Kiribati",
                              "Kuwait",
                              "Kyrgyzstan",
                              "Laos",
                              "Latvia",
                              "Lebanon",
                              "Lesotho",
                              "Liberia",
                              "Libya",
                              "Liechtenstein",
                              "Lithuania",
                              "Luxembourg",
                              "Macao",
                              "Madagascar",
                              "Malawi",
                              "Malaysia",
                              "Maldives",
                              "Mali",
                              "Malta",
                              "Marshall Islands",
                              "Mauritania",
                              "Mauritius",
                              "Mexico",
                              "Micronesia",
                              "Moldova",
                              "Monaco",
                              "Mongolia",
                              "Montenegro",
                              "Morocco",
                              "Mozambique",
                              "Myanmar",
                              "Namibia",
                              "Nauru",
                              "Nepal",
                              "Netherlands",
                              "New Zealand",
                              "Nicaragua",
                              "Niger",
                              "Nigeria",
                              "Norway",
                              "Oman",
                              "Pakistan",
                              "Palau",
                              "Panama",
                              "Papua New Guinea",
                              "Paraguay",
                              "Peru",
                              "Philippines",
                              "Poland",
                              "Portugal",
                              "Qatar",
                              "Romania",
                              "Russia",
                              "Rwanda",
                              "Saint Kitts & Nevis",
                              "Saint Lucia",
                              "Saint Vincent & Grenadines",
                              "Samoa",
                              "San Marino",
                              "São Tomé & Príncipe",
                              "Saudi Arabia",
                              "Senegal",
                              "Serbia",
                              "Seychelles",
                              "Sierra Leone",
                              "Singapore",
                              "Slovakia",
                              "Slovenia",
                              "Solomon Islands",
                              "Somalia",
                              "South Africa",
                              "South Sudan",
                              "Spain",
                              "Sri Lanka",
                              "Sudan",
                              "Suriname",
                              "Sweden",
                              "Switzerland",
                              "Syria",
                              "Taiwan",
                              "Tajikistan",
                              "Tanzania",
                              "Thailand",
                              "Timor-Leste",
                              "Togo",
                              "Tonga",
                              "Trinidad & Tobago",
                              "Tunisia",
                              "Turkey",
                              "Turkmenistan",
                              "Tuvalu",
                              "Uganda",
                              "Ukraine",
                              "United Arab Emirates",
                              "United Kingdom",
                              "United States",
                              "Uruguay",
                              "Uzbekistan",
                              "Vanuatu",
                              "Venezuela",
                              "Vietnam",
                              "Yemen",
                              "Zambia",
                              "Zimbabwe"
                            ].map((country) =>
                              <option key={country} value={country}>{country}</option>
                            )}
                          </select>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="consigneeState" id="consigneeState" placeholder="State" required
                            data-error="State is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="consigneeCity" id="consigneeCity" placeholder="City" required
                            data-error="City is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="consigneeZip" id="consigneeZip" placeholder="Zip / Postal Code" required
                            data-error="Zip / Postal Code is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea name="consigneeAddress" id="consigneeAddress" className="form-control" placeholder="Address" required
                            data-error="Address is required." />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <CustomBtn type="submit" label={buttonLabel} />
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
