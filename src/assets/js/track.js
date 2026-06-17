function formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + "/" + (monthIndex + 1) + "/" + year;
  }
  
  $(document).ready(function ($) {
    $(".track-result").hide();
    var currentURL = window.location.href;
    var url = new URL(currentURL);
    var tracking_no = url.searchParams.get("tracking_no");
    var search_by = url.searchParams.get("searchSelected");
    if (search_by == 1) {
      var searchtype = "tracking_no";
    } else if (search_by == 6) {
      var searchtype = "forwarding_no1";
    } else if (search_by == 2) {
      var searchtype = "reference_no";
    }
    if (tracking_no) {
      tracking_no = tracking_no.trim();
      tracking_no = tracking_no.split(" ").join(",");
      var tracking_no_array = tracking_no.split(",");
      if (!tracking_no_array) {
        tracking_no_array = tracking_no.split(" ");
      }
    }
    if (tracking_no) {
      $(".track-result").show("slow", () => {
        const offset = $(".track-result").offset().top - $(".navbar-area").outerHeight() - 20;
        $("html, body").animate({ scrollTop: offset }, 600);
      });
      if (tracking_no_array.length > 10) {
        alert("Up to 10 tracking numbers are allowed at a time");
        $(".tracking-data").html("");
        return false;
      }
    } else {
      return false;
    }
    $.getJSON(
      "https://admin.jdic.online/api/tracking_api/get_tracking_data?" +
        searchtype +
        "=" +
        tracking_no +
        "&customer_code=superadmin&company=j-d-international-courier&api_company_id=2",
      function (data) {
        $(".tracking-data").html("");
        if (data && data.length) {
          $.each(data, function (_index, docket) {
            var lbl_no =
              search_by == 1
                ? "AWB: " + docket.tracking_no
                : search_by == 2
                ? "Reference: " + docket.reference_no
                : search_by == 3
                ? "Order: " + docket.order_no
                : search_by == 4
                ? "Eway Bill: " + docket.eway_bill_no
                : search_by == 5
                ? "Invoice: " + docket.invoice_no
                : search_by == 6
                ? "Forwarding : " + docket.forwarding_no
                : "Forwarding 2: " + docket.forwarding_no2;
            if (docket.docket_info) {
              if (docket.docket_info.length) {
                if (_index == 0) {
                  var is_active = 1;
                } else {
                  var is_active = 0;
                }
                var tr_toappend =
                  '<div class="accordion-header  ' +
                  (is_active == 1 ? "active" : "") +
                  '">' +
                  "<h2>" +
                  lbl_no +
                  "</h2>" +
                  "<h2>Status: " +
                  docket.docket_info[4][1] +
                  "</h2>" +
                  '<span class="accordion-toggle"><i class="fas ' +
                  (is_active == 1 ? "fa-minus" : "fa-plus") +
                  ' fa_icon"></i></span>' +
                  "</div>" +
                  '<div class="accordion-body  ' +
                  (is_active == 1 ? "active" : "") +
                  '">' +
                  '<h3 class="text-center">' +
                  lbl_no +
                  "</h3>" +
                  '<div class="tracking-info mt-4"><div class="table-responsive">' +
                  "<table>" +
                  "<thead>" +
                  '<tr><td colspan="11"><b>Tracking Information</b></td></tr>' +
                  "<tr>" +
                  "<th>AWB No.</th>" +
                  "<th>Booking Date</th>" +
                  "<th>Consignee Name</th>" +
                  "<th>Destination</th>" +
                  "<th>No. of Pieces</th>" +
                  "<th>Status</th>" +
                  "<th>Delivery Date</th>" +
                  "<th>Delivery Time</th>" +
                  "<th>Receiver Name</th>" +
                  "<th>Forwarding No.</th>" +
                  "<th>View POD</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody>" +
                  "<tr><td>" +
                  docket.docket_info[0][1] +
                  "</td><td>" +
                  formatDate(new Date(docket.docket_info[1][1])) +
                  "</td><td>" +
                  docket.docket_info[2][1] +
                  "</td><td>" +
                  docket.docket_info[3][1] +
                  "</td><td>" +
                  (docket.pcs ? docket.pcs : "") +
                  "</td><td>" +
                  docket.docket_info[4][1] +
                  "</td><td>" +
                  (isNaN(new Date(docket.docket_info[5][1])) ||
                  new Date(docket.docket_info[5][1]) == "undefined"
                    ? " "
                    : formatDate(new Date(docket.docket_info[5][1]))) +
                  "</td><td>" +
                  (docket.docket_info[5][1]
                    ? docket.docket_info[5][1].split(" ")[1]
                    : "") +
                  "</td><td>" +
                  docket.docket_info[6][1] +
                  "</td><td>" +
                  (docket.forwarding_url
                    ? '<a href="' +
                      docket.forwarding_url +
                      '" target="_blank" style="color: black;font-weight: 600;"><u> ' +
                      docket.forwarding_no +
                      "</u></a>"
                    : "" + docket.forwarding_no + "") +
                  "</td><td>" +
                  (docket.pod_image
                    ? '<a href="' +
                      docket.pod_image +
                      '" target="_blank"> View </a>'
                    : "") +
                  "</td></tr>" +
                  "</tbody>" +
                  "</table>" +
                  "</div></div>";
              }
            }
            if (docket.docket_events) {
              if (docket.docket_events.length) {
                tr_toappend +=
                  '<div class="delivery-info mt-4"><div class="table-responsive">' +
                  "<table>" +
                  "<thead>" +
                  '<tr><td colspan="5"><b>Delivery Information</b></td></tr>' +
                  "<tr>" +
                  "<th>Date</th>" +
                  "<th>Time</th>" +
                  "<th>Location</th>" +
                  "<th>Activity</th>" +
                  "<th>Remarks</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody>";
                $.each(docket.docket_events, function (index, value) {
                  tr_toappend +=
                    "<tr>" +
                    "<td>" +
                    (value.event_at
                      ? formatDate(new Date(value.event_at))
                      : " ") +
                    "</td>" +
                    "<td>" +
                    (value.event_at
                      ? value.event_at.split(" ")[1].slice(0, 5)
                      : " ") +
                    "</td>" +
                    "<td>" +
                    value.event_location +
                    "</td>" +
                    "<td>" +
                    value.event_description +
                    "</td>" +
                    "<td>" +
                    (value.event_remark ? value.event_remark : "") +
                    "</td>" +
                    "</tr>";
                });
                tr_toappend += "</tbody>" + "</table>" + "</div></div></div>";
  
                if (tr_toappend) {
                  $(".tracking-data").append(tr_toappend);
                }
              }
            } else {
              $(".tracking-data").append(
                '<div class="invalid-record"><h5>Invalid No.: ' +
                  docket.tracking_no +
                  "</h5></div>"
              );
            }
          });
        }
        $(".accordion-header").click(function () {
          if ($(this).hasClass("active")) {
            $(".accordion-header").removeClass("active");
            $(".accordion-body").removeClass("active");
            $(this).find(".fa_icon").removeClass("fa-minus").addClass("fa-plus");
          } else {
            $(".accordion-header").removeClass("active");
            $(".accordion-body").removeClass("active");
            $(this).addClass("active");
            $(this).next(".accordion-body").addClass("active");
            $(".fa_icon").removeClass("fa-minus").addClass("fa-plus");
            $(this).find(".fa_icon").addClass("fa-minus").removeClass("fa-plus");
          }
        });
      }
    );
  });