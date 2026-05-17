<template>
  <div id="education">
    <div class="container">
      <header class="section-header" v-animate>
        <span class="label">- Academic</span>
        <h2 class="title">Education</h2>
      </header>

      <div class="edu-block" v-animate="{ delay: 100 }">
        <div class="school-line">
          <span class="school-name">BINUS University</span>
        </div>

        <div class="details">
          <div class="detail-row">
            <span class="degree">Bachelor of Computer Science</span>
            <span class="period">2015 – 2019</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import "@/scss/index.scss";

#education {
  background: $navy;
  padding: 0 0 80px;
  color: $white;
  text-align: left;
  @include text-cannot-edit;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    margin-bottom: 48px;

    .label {
      color: $orange;
      font-family: monospace;
      font-size: 13px;
      letter-spacing: 2px;
    }

    .title {
      font-family: "Futura", sans-serif;
      font-size: 26px;
      text-transform: uppercase;
      margin-top: 6px;
    }
  }

  .edu-block {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0 40px;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  .school-line {
    padding-top: 5px;

    .school-name {
      font-family: "Futura", sans-serif;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba($white, 0.9);
      white-space: nowrap;
    }
  }

  .details {
    border-left: 1px solid rgba($white, 0.08);
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .detail-row {
      display: flex;
      align-items: baseline;
      gap: 16px;
      flex-wrap: wrap;
      position: relative;
      transition: background 0.2s ease;

      &::before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: rgba($orange, 0.5);
        flex-shrink: 0;
        margin-top: 5px;
        margin-left: -27px;
        margin-right: 20px;
        transition: background 0.2s ease;
      }

      &:hover .degree {
        color: $orange;
      }

      &:hover::before {
        background: $orange;
      }
    }

    .degree {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: rgba($white, 0.8);
      flex: 1;
      min-width: 180px;
      transition: color 0.2s ease;
    }

    .period {
      font-family: monospace;
      font-size: 12px;
      color: rgba($white, 0.6);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .faculty {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      color: rgba($white, 0.45);
      padding-left: 27px;
    }
  }

  @media (max-width: 680px) {
    .edu-block {
      .school-line {
        padding-bottom: 8px;
        border-bottom: 1px solid rgba($white, 0.08);
      }

      .details {
        border-left: none;
        padding-left: 0;

        .detail-row::before {
          display: none;
        }

        .faculty {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
