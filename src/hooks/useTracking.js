import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default function useTracking() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const trackingNo = searchParams.get('tracking_no')?.trim();
    const searchBy = searchParams.get('searchSelected');
    const container = document.querySelector('.tracking-data');
    const resultBlock = document.querySelector('.track-result');

    if (!container || !trackingNo) {
      if (resultBlock) resultBlock.style.display = 'none';
      return;
    }

    let searchType = 'tracking_no';
    if (searchBy === '6') searchType = 'forwarding_no1';
    if (searchBy === '2') searchType = 'reference_no';

    const trackingNumbers = trackingNo.split(/[\s,]+/).filter(Boolean);
    if (trackingNumbers.length > 10) {
      alert('Up to 10 tracking numbers are allowed at a time');
      container.innerHTML = '';
      return;
    }

    if (resultBlock) {
      resultBlock.style.display = 'block';
      resultBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const url = `https://admin.jdic.online/api/tracking_api/get_tracking_data?${searchType}=${trackingNumbers.join(',')}&customer_code=superadmin&company=j-d-international-courier&api_company_id=2`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        container.innerHTML = '';
        if (!data?.length) return;

        data.forEach((docket, index) => {
          const lblNo =
            searchBy === '1'
              ? `AWB: ${docket.tracking_no}`
              : searchBy === '2'
                ? `Reference: ${docket.reference_no}`
                : searchBy === '6'
                  ? `Forwarding : ${docket.forwarding_no}`
                  : `Forwarding 2: ${docket.forwarding_no2}`;

          if (!docket.docket_info?.length) {
            container.insertAdjacentHTML(
              'beforeend',
              `<div class="invalid-record"><h5>Invalid No.: ${docket.tracking_no}</h5></div>`,
            );
            return;
          }

          const isActive = index === 0;
          let html =
            `<div class="accordion-header ${isActive ? 'active' : ''}">` +
            `<h2>${lblNo}</h2>` +
            `<h2>Status: ${docket.docket_info[4][1]}</h2>` +
            `<span class="accordion-toggle"><i class="fas ${isActive ? 'fa-minus' : 'fa-plus'} fa_icon"></i></span>` +
            '</div>' +
            `<div class="accordion-body ${isActive ? 'active' : ''}">` +
            `<h3 class="text-center">${lblNo}</h3>` +
            '<div class="tracking-info mt-4"><div class="table-responsive"><table><thead>' +
            '<tr><td colspan="11"><b>Tracking Information</b></td></tr><tr>' +
            '<th>AWB No.</th><th>Booking Date</th><th>Consignee Name</th><th>Destination</th>' +
            '<th>No. of Pieces</th><th>Status</th><th>Delivery Date</th><th>Delivery Time</th>' +
            '<th>Receiver Name</th><th>Forwarding No.</th><th>View POD</th></tr></thead><tbody><tr>' +
            `<td>${docket.docket_info[0][1]}</td>` +
            `<td>${formatDate(new Date(docket.docket_info[1][1]))}</td>` +
            `<td>${docket.docket_info[2][1]}</td>` +
            `<td>${docket.docket_info[3][1]}</td>` +
            `<td>${docket.pcs || ''}</td>` +
            `<td>${docket.docket_info[4][1]}</td>` +
            `<td>${Number.isNaN(new Date(docket.docket_info[5][1]).getTime()) ? ' ' : formatDate(new Date(docket.docket_info[5][1]))}</td>` +
            `<td>${docket.docket_info[5][1] ? docket.docket_info[5][1].split(' ')[1] : ''}</td>` +
            `<td>${docket.docket_info[6][1]}</td>` +
            `<td>${docket.forwarding_url ? `<a href="${docket.forwarding_url}" target="_blank" rel="noreferrer" style="color: black;font-weight: 600;"><u>${docket.forwarding_no}</u></a>` : docket.forwarding_no || ''}</td>` +
            `<td>${docket.pod_image ? `<a href="${docket.pod_image}" target="_blank" rel="noreferrer"> View </a>` : ''}</td>` +
            '</tr></tbody></table></div></div>';

          if (docket.docket_events?.length) {
            html += '<div class="delivery-info mt-4"><div class="table-responsive"><table><thead>' +
              '<tr><td colspan="5"><b>Delivery Information</b></td></tr><tr>' +
              '<th>Date</th><th>Time</th><th>Location</th><th>Activity</th><th>Remarks</th></tr></thead><tbody>';

            docket.docket_events.forEach((event) => {
              html +=
                '<tr>' +
                `<td>${event.event_at ? formatDate(new Date(event.event_at)) : ' '}</td>` +
                `<td>${event.event_at ? event.event_at.split(' ')[1].slice(0, 5) : ' '}</td>` +
                `<td>${event.event_location}</td>` +
                `<td>${event.event_description}</td>` +
                `<td>${event.event_remark || ''}</td>` +
                '</tr>';
            });

            html += '</tbody></table></div></div></div>';
          }

          container.insertAdjacentHTML('beforeend', html);
        });

        container.querySelectorAll('.accordion-header').forEach((header) => {
          header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');
            container.querySelectorAll('.accordion-header').forEach((item) => item.classList.remove('active'));
            container.querySelectorAll('.accordion-body').forEach((item) => item.classList.remove('active'));
            container.querySelectorAll('.fa_icon').forEach((icon) => {
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
            });

            if (!isActive) {
              header.classList.add('active');
              header.nextElementSibling?.classList.add('active');
              const icon = header.querySelector('.fa_icon');
              icon?.classList.add('fa-minus');
              icon?.classList.remove('fa-plus');
            }
          });
        });
      })
      .catch(() => {
        container.innerHTML = '<div class="invalid-record"><h5>Unable to fetch tracking data.</h5></div>';
      });
  }, [searchParams]);
}
