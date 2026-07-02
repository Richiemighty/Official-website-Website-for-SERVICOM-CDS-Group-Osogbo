document.addEventListener('DOMContentLoaded', function () {
  fetch('current.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load current.json');
      return response.json();
    })
    .then(config => {
      const regime = config.activeRegime;
      const basePath = `archive/${regime}/`;

      // Load Executives
      fetch(`${basePath}exco.json`)
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
                <img src="${basePath}${ex.image}" alt="${ex.name}">
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
          document.getElementById('batch-info').textContent = "❌ Team unavailable";
          document.getElementById('exco-cards').innerHTML = '<p style="text-align:center;color:#e74c3c;">Team data not found</p>';
        });

      // ✅ LOAD ACTIVITIES (RESTORED)
      fetch(`${basePath}activities.json`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to load activities.json');
          return response.json();
        })
        .then(data => {
          let html = '';
          data.activities.forEach(act => {
            html += `
              <div class="event-card">
                <img src="${basePath}${act.flyer}" alt="${act.title}" class="event-flyer">
                <div class="event-content">
                  <h3>${act.title}</h3>
                  <span class="event-date">${act.date}</span>
                  ${act.venue ? `<p><strong>Venue:</strong> ${act.venue}</p>` : ''}
                  <p>${act.description}</p>
                  <a href="${basePath}${act.pageUrl}" class="btn" style="margin-top: 15px; display: inline-block;">View Full Report →</a>
                </div>
              </div>
            `;
          });
          document.getElementById('activity-cards').innerHTML = html;
        })
        .catch(err => {
          console.error("Activities load error:", err);
          document.getElementById('activity-cards').innerHTML = '<p style="text-align:center; color:#666;">No activities yet.</p>';
        });
    })
    .catch(err => {
      console.error("System error:", err);
      document.getElementById('batch-info').textContent = "❌ System offline";
      document.getElementById('exco-cards').innerHTML = '<p style="text-align:center;color:#e74c3c;">Config error</p>';
      document.getElementById('activity-cards').innerHTML = '<p style="text-align:center; color:#666;">System error.</p>';
    });
});