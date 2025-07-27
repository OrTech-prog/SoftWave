let currentPage = 'home';

function showPage(pageId) {
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.textContent.toLowerCase() === pageId.toLowerCase()) {
            link.classList.add('active');
        }
    });
    
    currentPage = pageId;
    
    const footer = document.getElementById('footer');
    const activePage = document.getElementById(pageId);
    if (footer && activePage) activePage.appendChild(footer);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer');
    const homePage = document.getElementById('home');
    if (footer && homePage) homePage.appendChild(footer);
});

document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = (x - 0.5) * speed * 20;
        const yPos = (y - 0.5) * speed * 20;
        shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-shapes');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

document.querySelectorAll('.navbar').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 1000;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(46, 204, 113, 0.9);
      color: white;
      padding: 20px 40px;
      border-radius: 10px;
      backdrop-filter: blur(20px);
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    `;
    successMsg.textContent = 'Message sent successfully! We\'ll get back to you soon.';
    
    document.body.appendChild(successMsg);

    setTimeout(() => {
      successMsg.remove();
    }, 3000);

    this.reset();
  });

  const fadeStyle = document.createElement('style');
  fadeStyle.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
  `;
  document.head.appendChild(fadeStyle);
}


(function() {
  const container = document.querySelector('.moving-blocks');
  const num = 20;  

  for (let i = 0; i < num; i++) {
    const block = document.createElement('div');
    block.classList.add('block');

    
    const startX = Math.random() * 100; 
    block.style.left = `${startX}vw`;

    
    const size = 20 + Math.random() * 40; 
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;

    
    const isCircle = Math.random() > 0.5;
    block.style.borderRadius = isCircle ? '50%' : '0';

   
    const delay = Math.random() * -12;
    block.style.animationDelay = `${delay}s`;
    const duration = 8 + Math.random() * 8; 
    block.style.animationDuration = `${duration}s`;

    container.appendChild(block);
  }
})();

const studentData = [
  {
    name: "Ofentse Ramasodi",
    email: "Ofentse@cc.com",
    course: "Software Engineering",
    year: "1st year",
    status: "Active"
  },
  {
    name: "Nhlanhla Sibiya",
    email: "Nhlanhla@cc.com",
    course: "Software Engineering",
    year: "1st Year",
    status: "Active"
  },
  {
    name: "Thabo Nkosi",
    email: "thabo.n@cc.com",
    course: "Data Science",
    year: "3rd Year",
    status: "Active"
  },
  {
    name: "Naledi Dlamini",
    email: "naledi.d@cc.com",
    course: "Cybersecurity",
    year: "2nd Year",
    status: "Active"
  },
  {
    name: "Katlego Zuma",
    email: "katlego.z@cc.com",
    course: "AI & Robotics",
    year: "3rd Year",
    status: "Inactive"
  },
  {
    name: "Zanele Mthembu",
    email: "zanele.m@cc.com",
    course: "Web Development",
    year: "1st Year",
    status: "Active"
  },
  {
    name: "Mpumi Khumalo",
    email: "mpumi.k@cc.com",
    course: "Software Engineering",
    year: "2nd Year",
    status: "Active"
  },
  {
    name: "Tshepo Mabaso",
    email: "tshepo.m@cc.com",
    course: "UX/UI Design",
    year: "3rd Year",
    status: "Active"
  },
  {
    name: "Bonolo Radebe",
    email: "bonolo.r@cc.com",
    course: "Information Systems",
    year: "2nd Year",
    status: "Active"
  },
  {
    name: "Sipho Dube",
    email: "sipho.d@cc.com",
    course: "Computer Science",
    year: "1st Year",
    status: "Active"
  }
];


function generateStudentCards(students) {
  const container = document.getElementById("studentCardGrid");
  container.innerHTML = "";

  students.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Year:</strong> ${student.year}</p>
      <p><strong>Status:</strong> ${student.status}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = studentData.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    );
    generateStudentCards(filtered);
  });

  generateStudentCards(studentData);
});

document.querySelector(".upload-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value;
  const docType = document.getElementById("docType").value;
  const file = document.getElementById("fileUpload").files[0];

  if (name && docType && file) {
    alert(`Successfully uploaded ${docType} for ${name}`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
