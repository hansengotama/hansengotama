<template>
  <main id="cv-page">
    <div class="cv-actions">
      <button @click="downloadPDF">
        Download PDF
      </button>
    </div>

    <!-- Header -->
    <header class="cv-header">
      <h1 class="name">Hansen</h1>

      <div class="contact">
        <span>Jakarta, Indonesia</span>
        <span>•</span>
        <span>+62 811-1814-032</span>
        <span>•</span>
        <span>hansenwu98@gmail.com</span>
        <span>•</span>
        <a href="https://linkedin.com/in/hansengotama" target="_blank">
          linkedin.com/in/hansengotama
        </a>
      </div>
    </header>

    <!-- Summary -->
    <section class="cv-section">
      <h2 class="section-title">Summary</h2>
      <p class="summary">
        Senior backend-focused engineer with 7+ years of experience building and
        maintaining systems across backend, mobile, and web platforms.
        Experienced in leading teams, defining technical direction, and removing
        blockers to ensure high-quality delivery.
        <br>
        <br>
        Strong believer in scalable system design, clean architecture, and effective engineering processes to
        drive business outcomes. Passionate about solving complex problems,
        understanding the why behind systems, and building solutions that create
        meaningful impact.
      </p>
    </section>

    <!-- Skills -->
    <section class="cv-section">
      <h2 class="section-title">Skills & Technologies</h2>
      <div class="skills-summary">
        <p>
          <strong>Languages & Frameworks:</strong>
          Go, PHP (Laravel, Phalcon), Dart (Flutter), Node.js, Next.js, Vue.js.
        </p>
        <p>
          <strong>Infrastructure & Databases:</strong>
          PostgreSQL, SQL Server, Redis, Docker, Linux, GitHub Actions.
        </p>
      </div>
    </section>

    <!-- Experience -->
    <section class="cv-section">
      <h2 class="section-title">Experience</h2>

      <div
          v-for="(company, cIndex) in experienceData.works"
          :key="cIndex"
          class="company"
      >
        <h3 class="company-name">{{ company.name }}</h3>

        <div
            v-for="(role, rIndex) in company.roles"
            :key="rIndex"
            class="role"
        >
          <div class="role-header">
            <span class="role-title">{{ role.text }}</span>
            <span class="role-time">{{ role.time }}</span>
          </div>

          <ul class="role-points">
            <li
                v-for="(point, pIndex) in role.description"
                :key="pIndex"
            >
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="cv-section">
      <h2 class="section-title">Education</h2>

      <div class="education">
        <div class="education-header">
          <span class="education-school">
            Universitas Bina Nusantara (Binus)
          </span>
          <span class="education-year">2019</span>
        </div>
        <div class="education-degree">
          Bachelor of Science (BSc) in Computer Science
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import experienceData from "@/static/experience-data";
import skillData from "@/static/skill-data";

export default defineComponent({
    name: "CVPage",
    setup() {
      const downloadPDF = () => {
        window.print();
      };

      const formatSkills = (list: any[]) => {
        return list.map(s => s.name).join(", ");
      };

      return {
        experienceData,
        skillData,
        downloadPDF,
        formatSkills
      };
    }
});
</script>

<style lang="scss">
#cv-page {
 max-width: 900px;
 margin: 0 auto;
 padding: 72px 32px 100px;
 background: #ffffff;
 color: #111111;
 font-family: "Inter", "Roboto", Arial, sans-serif;
 text-align: left;
}

.cv-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;

  button {
    font-size: 14px;
    padding: 8px 14px;
    border: 1px solid #ccc;
    background: #ffffff;
    color: #111;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background: #f5f5f5;
    }
  }
}

/* Hide button in PDF */
@media print {
  #menu, #footer, .cv-actions {
    display: none !important;
  }

  #cv-page {
    display: block;
    /* Reset padding so it doesn't double up with page margins */
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
  }

  .skills-summary p strong {
    width: 150px; /* Slightly tighter for print */
  }

  @page {
    size: A4;
    margin: 15mm;
  }
}

/* Header */
.cv-header {
  margin-bottom: 40px;

  .name {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }

  .contact {
    font-size: 14px;
    color: #333333;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    a {
      color: #111111;
      text-decoration: none;
    }
  }
}

/* Section */
.cv-section {
  margin-bottom: 36px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 6px;
}

/* Summary */
.summary {
  font-size: 15px;
  line-height: 1.6;
  max-width: 880px;
  text-align: justify;
}

/* Experience */
.company {
  margin-bottom: 28px;
}

.company-name {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.role {
  margin-bottom: 20px;
}

.role-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;
}

.role-title {
  font-weight: 600;
}

.role-time {
  color: #555555;
}

.role-points {
  padding-left: 18px;

  li {
    font-size: 14.5px;
    line-height: 1.6;
    margin-bottom: 6px;
  }
}

/* Education */
.education {
  font-size: 15px;
}

.education-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 4px;
}

.skills-summary {
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    margin: 0;
    font-size: 14.5px;
    line-height: 1.5;
    color: #333;

    strong {
      color: #111;
      font-weight: 600;
      display: inline-block;
      width: 180px; /* Aligns the colons for faster scanning */
    }
  }
}

@media (max-width: 640px) {
  .skills-summary strong {
    width: auto;
    display: block;
    margin-bottom: 2px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  #cv-page {
    padding: 48px 20px;
  }

  .role-header,
  .education-header {
    flex-direction: column;
    gap: 2px;
  }
}
</style>

