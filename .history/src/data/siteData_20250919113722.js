export const siteData = {
  name: "Care Charmalaya",
  tagline: "Where Wellness Meets Radiance",
  fullTagline: "Care Charmalaya — Compassionate Skin Care in Tanuku",
  heroSubtext: "Specialized dermatology care for acne, pigmentation, surgical skin treatments and advanced aesthetic therapies. Trusted by 30,000+ patients.",
  address: "Suryalayam Street, Opposite Bhavya Scan, Tanuku - 534211",
  city: "Tanuku",
  pincode: "534211",
  phones: { 
    mobile: "+91 82970 22777", 
    landline: "+91 08819 222777" 
  },
  email: "{{PLACEHOLDER_EMAIL: carecharmalaya@gmail.com}}",
  years: "9+ years",
  patientsTreated: "30,000+",
  beds: "{{PLACEHOLDER_BEDS: 10}}",
  
  doctor: {
    name: "Dr. M. Bhargavi [MBBS, MD, DVL]",
    title: "Consultant Dermatologist",
    RegistrationNumber: "{{PLACEHOLDER_DOCTOR_REGISTRATION_NUMBER: 104916}}",
    experience: "{{PLACEHOLDER_DOCTOR_EXPERIENCE: 5+ years}}",
    bio: "Dr. M. Bhargavi is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology with a focus on patient-first care.",
    image: "/assets/doctor-bhargavi.jpg"
  },
  
  awards: [
    "{{PLACEHOLDER_AWARD_1:  Dermatology Excellence Award }}",
    "{{PLACEHOLDER_AWARD_2: Best Dermatology Pharmacy Services}}",
    "{{PLACEHOLDER_AWARD_3: State Health & Skin Care Recognition }}"
  ],
  
  about: {
    description: "Care Charmalaya is a specialty skin-care hospital in Tanuku offering comprehensive medical, surgical and cosmetic dermatology.Led by Dr. M. Bhargavi, we combine clinical expertise with modern cosmetic treatments to deliver compassionate, evidence-based care.",
    vision: " 'To be recognized as the foremost dermatology and skin-care center in the region, setting benchmarks in medical, surgical, and cosmetic dermatology. We aspire to combine advanced technology, innovative treatments, and compassionate care to transform lives and restore confidence. Our vision is to create a trusted healthcare destination where every patient receives personalized attention, holistic solutions, and enduring results — making Care Charmalaya synonymous with world-class skin health and wellness.' ",
    mission: " 'Our mission is to provide comprehensive, patient-centered dermatological services that blend clinical expertise with modern innovations. We are committed to offering safe, effective, and evidence-based treatments tailored to individual needs, while ensuring comfort, transparency, and trust at every step. By investing in continuous learning, state-of-the-art infrastructure, and ethical medical practices, we strive to enhance not only skin health but also the overall quality of life of our patients. At Care Charmalaya, excellence in care is not just our goal — it is our promise.' "
  },
  
  services: [
    {
      category: "Medical Dermatology",
      icon: "FaStethoscope",
      treatments: [
        "Acne/Pimples Treatment",
        "Eczema & Psoriasis Care",
        "Skin Infections",
        "Rosacea Treatment",
        "Pigmentation Disorders",
        "Hair & Scalp Conditions",
        "Nail Diseases",
        "Skin Cancer Screening"
      ]
    },
    {
      category: "Cosmetic & Aesthetic Dermatology",
      icon: "FaSparkles",
      treatments: [
        "Chemical Peels",
        "Microdermabrasion & HydraFacial",
        "Laser Hair Removal",
        "Laser for Scars & Pigmentation",
        "Botox & Dermal Fillers",
        "PRP Therapy",
        "Microneedling",
        "Anti-aging Treatments"
      ]
    },
    {
      category: "Surgical Dermatology",
      icon: "FaScalpel",
      treatments: [
        "Mole/Wart/Skin Tag Removal",
        "Keloid & Cyst Removal",
        "Scar Revision Surgery",
        "Skin Biopsies",
        "Minor Skin Surgeries"
      ]
    },
    {
      category: "Preventive & General Skin Care",
      icon: "FaShieldAlt",
      treatments: [
        "Personalized Skincare Routines",
        "Anti-aging Counseling",
        "Sun Protection Guidance",
        "Diet & Lifestyle Advice",
        "Skin Health Education"
      ]
    }
  ],
  
  stats: [
    { number: "30,000+", label: "Patients Treated" },
    { number: "9+", label: "Years of Service" },
    { number: "30+", label: "Treatment Types" },
    { number: "24/7", label: "Emergency Care" }
  ],
  
   openingHours: {
    weekdays: "10:00 AM - 1:30 PM, 6:00 PM - 8:00 PM",
    sunday: "10",
    emergency: "24/7 Emergency Care Available",
    clinic: "8:00 AM - 8:00 PM (Monday to Saturday)"
  },
  
  social: {
    facebook: "https://www.facebook.com/share/1AE5pkN2Dz/",
    instagram: "https://www.instagram.com/carecharmalaya222777?igsh=YWtoN3dxaTYycm0w",
    youtube: "https://www.youtube.com/@CareCharmalaya"
  },
  
  googleMapsEmbed: "{{https://maps.app.goo.gl/KQtr6Ez6V26K195f8}}",
  googleFormUrl: "{{GOOGLE_DOCS_FORM_URL}}",
  // Google Forms direct submission (fill these from your form)
  googleForm: {
    // Optional: paste the Google Forms embed URL to use iframe instead of custom form
    embedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdnFpAIYIHvyyUVaLJ42j3xZVnd2oCkiYDo7Mmvy21jBYCrfg/viewform?embedded=true",
    // Example: https://docs.google.com/forms/d/e/FORM_ID/formResponse
    formEndpoint: "{{GOOGLE_FORM_RESPONSE_URL:https://docs.google.com/forms/d/e/1FAIpQLSdnFpAIYIHvyyUVaLJ42j3xZVnd2oCkiYDo7Mmvy21jBYCrfg/viewform?usp=header}}",
    entries: {
      // Replace the entry.* ids below with your Google Form field entry ids
      name: "{{ENTRY_ID_NAME: entry.123456789}}",
      phone: "{{ENTRY_ID_PHONE: entry.2233445566}}",
      email: "{{ENTRY_ID_EMAIL: entry.3344556677}}",
      preferredDate: "{{ENTRY_ID_DATE: entry.4455667788}}",
      preferredTime: "{{ENTRY_ID_TIME: entry.5566778899}}",
      message: "{{ENTRY_ID_MESSAGE: entry.6677889900}}",
      source: "{{ENTRY_ID_SOURCE: entry.7788990011}}",
      page: "{{ENTRY_ID_PAGE: entry.8899001122}}"
    }
  }
  ,
  // Google Apps Script Web App endpoint (preferred simple integration to Google Sheets)
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzCpBuCiB5iAGyBqb1TpQD5yxxYqrDR5xfcnYbHPt55gWy-9d78XMCSafktTtp7u7EShQ/exec"
};

export const blogPosts = [
  // 🌿 Skin Blogs
  {
    id: 1,
    title: "Daily Skincare Routine for Healthy, Glowing Skin",
    author: "Dr. M Bhargavi",
    date: "March 15, 2024",
    image: "/assets/gallery/SkincareEssentials.png.png",
    summary: "A simple, consistent AM/PM routine for healthy, glowing skin.",
    content: `Healthy skin starts with consistency. Begin your day by cleansing your face with a mild, pH-balanced cleanser to remove dirt and excess oil. Follow it with a lightweight moisturizer to lock in hydration. Sunscreen is a must—even indoors—to protect from UV damage.

In the evening, cleanse again to remove pollutants and makeup, apply a nourishing night cream or serum, and let your skin heal overnight. Remember, hydration, a balanced diet, and proper sleep are just as important as external care.

Tip: Avoid over-exfoliating (1–2 times/week is enough). Introduce active ingredients slowly (like retinol or AHAs), and always patch-test new products to prevent reactions.`
  },
  {
    id: 2,
    title: "How to Identify Your Skin Type",
    author: "Dr. M Bhargavi",
    date: "March 12, 2024",
    image: "/assets/gallery/SkinTypes.png.png",
    summary: "Know your skin: oily, dry, combination, or sensitive.",
    content: `Knowing your skin type helps you choose the right products.

Oily Skin: Shiny, with large pores and prone to acne.

Dry Skin: Feels tight, flaky, or rough.

Combination Skin: Oily in the T-zone (forehead, nose, chin) but dry on cheeks.

Sensitive Skin: Easily irritated, red, or itchy.

To test, wash your face, leave it bare for an hour, and notice the changes. Right diagnosis means healthier care.

Pro tip: Your skin type can change with weather, hormones, or medications. Reassess every few months and adjust your routine.`
  },
  {
    id: 3,
    title: "Acne Myths vs. Facts",
    author: "Dr. M Bhargavi",
    date: "March 09, 2024",
    image: "/assets/gallery/AcneMyths.png.png",
    summary: "Bust common acne myths and focus on what works.",
    content: `Acne is not caused by eating chocolate or oily food—it’s a skin condition influenced by hormones, stress, and genetics. Popping pimples doesn’t “cure” them; instead, it worsens scars.

Regular cleansing, dermatologist-prescribed medication, and a healthy lifestyle can control breakouts. Remember, acne is treatable—don’t believe the myths!

Important: Avoid using many actives at once (like benzoyl peroxide + retinoid for beginners). Start slow, moisturize adequately, and use sunscreen daily.`
  },
  {
    id: 4,
    title: "Anti-Aging Treatments & Lifestyle Tips",
    author: "Dr. M Bhargavi",
    date: "March 06, 2024",
    image: "/assets/gallery/AgelessBeauty.png.png",
    summary: "Delay signs of aging with care and proven treatments.",
    content: `Aging is natural, but early care can delay fine lines and wrinkles. Use sunscreens, retinol-based creams, and antioxidants like Vitamin C.

Professional treatments such as chemical peels, botox, and laser therapies also improve skin texture. Most importantly, sleep well, eat antioxidant-rich foods, and avoid smoking. Healthy living reflects on your skin.

Lifestyle add-on: Manage stress (yoga/meditation), limit alcohol, and include collagen-supporting nutrients (protein, vitamin C, zinc) in your diet.`
  },
  {
    id: 5,
    title: "Importance of Sunscreen in All Seasons",
    author: "Dr. M Bhargavi",
    date: "March 03, 2024",
    image: "/assets/gallery/SunscreenEveryday.png.png",
    summary: "Why SPF daily prevents tanning, pigmentation and aging.",
    content: `Many believe sunscreen is only for summers. The truth? Harmful UV rays are present year-round—even on cloudy days.

Daily use of SPF 30+ prevents tanning, pigmentation, premature wrinkles, and even skin cancer. Apply generously on face, neck, and exposed areas 20 minutes before stepping out, and reapply every 3–4 hours.

Choose broad-spectrum SPF with PA+++ or higher. Use 2-fingers rule for the face, and don’t forget ears, neck, and hands.`
  },
  {
    id: 6,
    title: "Top Skin Problems & When to See a Dermatologist",
    author: "Dr. M Bhargavi",
    date: "March 01, 2024",
    image: "/assets/gallery/DermatologistVisit.png.png",
    summary: "Common issues and red flags that need medical care.",
    content: `Common issues like acne, eczema, rashes, or fungal infections may seem harmless but can worsen if ignored.

If your skin shows signs of persistent redness, non-healing wounds, unusual moles, or itching, it’s time to consult a dermatologist. Early treatment ensures quicker recovery and prevents long-term damage.

Emergency signs: Sudden swelling, blistering rashes, or rapidly changing moles should be evaluated urgently.`
  },

  // 💇 Hair Blogs
  {
    id: 7,
    title: "Hair Fall Causes & Solutions",
    author: "Dr. M Bhargavi",
    date: "February 26, 2024",
    image: "/assets/gallery/HealthyHair.png.png",
    summary: "Understand causes and practical ways to reduce hair fall.",
    content: `Hair fall is common but can have multiple causes—stress, poor diet, hormonal imbalance, or even harsh styling products.

To reduce hair fall, eat protein-rich foods, massage your scalp, avoid excessive heat styling, and manage stress. If shedding continues, consult a dermatologist to rule out conditions like thyroid issues or alopecia.

Diet note: Add eggs, pulses, nuts, and leafy greens. Address deficiencies (iron, vitamin D, B12) with guidance.`
  },
  {
    id: 8,
    title: "How to Maintain Healthy Scalp & Strong Hair",
    author: "Dr. M Bhargavi",
    date: "February 23, 2024",
    image: "/assets/gallery/ScalpCare.png.png",
    summary: "Healthy scalp habits for strong, shiny hair growth.",
    content: `A healthy scalp is the foundation of healthy hair. Wash your hair with a mild shampoo 2–3 times a week, massage with natural oils, and avoid scratching or using harsh chemicals.

Stay hydrated and eat vitamins like biotin and zinc. A clean, nourished scalp ensures shiny, strong hair growth.

Avoid tight hairstyles, cleanse after workouts, and use a clarifying shampoo once in 2–3 weeks if you use styling products.`
  },
  {
    id: 9,
    title: "Best Hair Care Routine for Different Hair Types",
    author: "Dr. M Bhargavi",
    date: "February 20, 2024",
    image: "/assets/gallery/HairDiversity.png.png",
    summary: "Tailor your routine for curly, straight, dry/frizzy, or oily hair.",
    content: `Curly Hair: Use hydrating shampoos and leave-in conditioners.

Straight Hair: Wash frequently to avoid oil build-up.

Dry/Frizzy Hair: Apply hair masks weekly and avoid heat styling.

Oily Hair: Use lightweight shampoos and avoid heavy oils.

Every hair type is unique—tailor your care routine accordingly.

Bonus: Protect hair from sun/chlorine with caps or leave-in conditioners when outdoors or swimming.`
  },
  {
    id: 10,
    title: "Dandruff: Causes, Prevention & Treatment",
    author: "Dr. M Bhargavi",
    date: "February 16, 2024",
    image: "/assets/gallery/DandruffFree.png.png",
    summary: "Why dandruff happens and how to control it effectively.",
    content: `Dandruff is often caused by fungal growth, dry scalp, or sensitivity to hair products. Regular use of anti-dandruff shampoos, gentle oiling, and avoiding harsh styling gels can help.

If dandruff persists with itching or redness, visit a dermatologist—it could be seborrheic dermatitis.

Use shampoos with ketoconazole, zinc pyrithione, or selenium sulfide as advised. Do not scratch—this worsens inflammation.`
  },
  {
    id: 11,
    title: "Hair Loss Treatments: PRP, Transplant & Modern Therapies",
    author: "Dr. M Bhargavi",
    date: "February 12, 2024",
    image: "/assets/gallery/ModernTreatments.png.png",
    summary: "Overview of modern solutions for stubborn hair loss.",
    content: `Modern science offers solutions to stubborn hair loss. PRP therapy (Platelet-Rich Plasma) stimulates natural hair regrowth. Hair transplantation provides permanent results in bald areas.

Laser therapies and advanced medications also help. A dermatologist can guide you to the best treatment based on your hair condition and health.

Note: Treatment choice depends on diagnosis (androgenetic alopecia vs telogen effluvium). Avoid self-medicating without evaluation.`
  },
  {
    id: 12,
    title: "Myths About Hair Oils & Shampoos",
    author: "Dr. M Bhargavi",
    date: "February 08, 2024",
    image: "/assets/gallery/ProductChoices.png.png",
    summary: "Separate facts from myths about oils and shampoos.",
    content: `Not all oils suit every hair type—excess oiling can sometimes clog pores. Similarly, frequent shampooing doesn’t cause baldness; using harsh shampoos does.

Hair growth depends more on genetics and health than just external care. Choose products wisely and don’t rely on myths.

Choose sulfate-free shampoos if hair is colored, and avoid very heavy oils on oily scalps. Patch-test new products.`
  }
];