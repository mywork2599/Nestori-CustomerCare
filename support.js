$(document).ready(function() {
    // Check login status and update navbar
    updateNavbar();

    // Add Ticket Form Submission
    $('#addTicketForm').submit(function(e) {
        e.preventDefault();
        var customerType = $('#ticketCustomerType').val();
        var issue = $('#ticketIssue').val();
        var priority = $('#ticketPriority').val();
        alert('New ticket created!\nCustomer Type: ' + customerType + '\nIssue: ' + issue + '\nPriority: ' + priority);
        $('#addTicketModal').modal('hide');
        $('#addTicketForm')[0].reset();
    });

    // Resolve buttons
    $('button:contains("Resolve")').click(function() {
        alert('Ticket resolved!');
    });

    // Update buttons
    $('button:contains("Update")').click(function() {
        alert('Ticket updated!');
    });

    // View buttons
    $('button:contains("View")').click(function() {
        alert('Viewing ticket details...');
    });

    // Mail Form Submission
    $('#mailForm').submit(function(e) {
        e.preventDefault();
        var to = $('#mailTo').val();
        var subject = $('#mailSubject').val();
        var body = $('#mailBody').val();
        alert('Email sent to: ' + to + '\nSubject: ' + subject + '\nBody: ' + body);
        $('#mailModal').modal('hide');
        $('#mailForm')[0].reset();
    });

    // Message Form Submission
    $('#messageForm').submit(function(e) {
        e.preventDefault();
        var to = $('#messageTo').val();
        var whatsappNumber = $('#whatsappNumber').val();
        var body = $('#messageBody').val();
        // Remove any non-numeric characters from the number
        var cleanNumber = whatsappNumber.replace(/\D/g, '');
        // Construct WhatsApp URL
        var whatsappURL = 'https://wa.me/' + cleanNumber + '?text=' + encodeURIComponent(body);
        // Open WhatsApp in a new window
        window.open(whatsappURL, '_blank');
        $('#messageModal').modal('hide');
        $('#messageForm')[0].reset();
    });

    // Logout functionality
    $('#logoutBtn').click(function() {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userName');
        updateNavbar();
        window.location.href = 'login.html';
    });
});

function updateNavbar() {
    var userName = localStorage.getItem('userName');
    if (userName) {
        $('#userBtn').text(userName);
        $('#logoutBtn').show();
        $('#helpBtn').show();
    } else {
        $('#userBtn').text('Login').attr('onclick', "window.location.href='login.html'");
        $('#logoutBtn').hide();
        $('#helpBtn').hide();
    }
}
