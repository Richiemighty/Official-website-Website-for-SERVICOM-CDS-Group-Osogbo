document.addEventListener('DOMContentLoaded', function () {
  // Load Executives
  fetch('current/exco.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load exco.json');
      return response.json();
    })
    .then(data => {
      document.getElementById('batch-info').textContent = `${data.batch} (${data.period})`;
      
      let html = '';
      data.executives.forEach(ex => {
        html += `
          <div class="team-member">
            <img src="${ex.image}" alt="${ex.name}">
            <h3>${ex.name}</h3>
            <p>${ex.position}</p>
            <div class="social-links">
              <a href="${ex.whatsapp}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        `;
      });
      document.getElementById('exco-cards').innerHTML = html;
    })
    .catch(err => {
      console.error("Exco load error:", err);
      document.getElementById('batch-info').textContent = "❌ Failed to load team";
    });

  // ✅ LOAD ACTIVITIES (NEW CODE BELOW)
  fetch('current/activities.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load activities.json');
      return response.json();
    })
    .then(data => {
      let html = '';
      data.activities.forEach(act => {
        html += `
          <div class="event-card">
            <img src="${act.flyer}" alt="${act.title}" class="event-flyer">
            <div class="event-content">
              <h3>${act.title}</h3>
              <span class="event-date">${act.date}</span>
              ${act.venue ? `<p><strong>Venue:</strong> ${act.venue}</p>` : ''}
              <p>${act.description}</p>
              <a href="${act.pageUrl}" class="btn" style="margin-top: 15px; display: inline-block;">View Full Report →</a>
            </div>
          </div>
        `;
      });
      document.getElementById('activity-cards').innerHTML = html;
    })
    .catch(err => {
      console.error("Activities load error:", err);
      document.getElementById('activity-cards').innerHTML = '<p style="text-align:center;color:#e74c3c;">No recent activities.</p>';
    });
});