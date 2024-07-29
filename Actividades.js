document.addEventListener('DOMContentLoaded', function() {
    const activities = [
        { activity: 'Difusión de nuestro proyecto de limpieza y reforestación del manglar.', date: '08-15/07/2024', remark: 'INICIO' },
        { activity: 'Capacitaciones técnicas para la comunidad', date: '05-23/08/2024' },
        { activity: 'Mingas de limpieza en el manglar de Atacames.', date: '02-30/09/2024' },
        { activity: 'Reforestación del manglar de Atacames.', date: '07-30/10/2024' },
        { activity: 'Succión del sedimento del lecho del río Atacames.', date: '02-20/12/2024', remark: 'FINAL' }
    ];

    const calendarTable = document.getElementById('calendar-table');

    activities.forEach(activity => {
        const row = document.createElement('tr');

        const activityCell = document.createElement('td');
        activityCell.textContent = activity.activity;
        row.appendChild(activityCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = activity.date;
        row.appendChild(dateCell);

        if (activity.remark) {
            const remarkCell = document.createElement('td');
            remarkCell.textContent = activity.remark;
            row.appendChild(remarkCell);
        }

        calendarTable.appendChild(row);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.activity-menu button');
    const contents = document.querySelectorAll('.activity-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Hide all contents
            contents.forEach(content => content.classList.add('d-none'));

            // Add active class to the clicked button
            button.classList.add('active');
            // Show the associated content
            const activityId = button.getAttribute('data-activity');
            document.getElementById(activityId).classList.remove('d-none');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.activity-menu button');
    const contents = document.querySelectorAll('.activity-content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const link = button.getAttribute('data-link');
            if (link) {
                window.location.href = link;
                return;
            }

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Hide all contents
            contents.forEach(content => content.classList.add('d-none'));

            // Add active class to the clicked button
            button.classList.add('active');
            // Show the associated content
            const activityId = button.getAttribute('data-activity');
            document.getElementById(activityId).classList.remove('d-none');
        });
    });
});
