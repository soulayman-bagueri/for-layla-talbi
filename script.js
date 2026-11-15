document.addEventListener("DOMContentLoaded", () => {
    // 1. القلوب المتحركة في الخلفية العامة
    const heartsContainer = document.getElementById("heartsContainer");
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");
        heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 16 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 450);

    // عناصر التنقل بين الخطوات
    const stepEnvelope = document.getElementById("stepEnvelope");
    const openEnvelopeBtn = document.getElementById("openEnvelopeBtn");
    const stepRose = document.getElementById("stepRose");
    const stepQuestion = document.getElementById("stepQuestion");

    const nextToRoseBtn = document.getElementById("nextToRoseBtn");
    const nextToQuestionBtn = document.getElementById("nextToQuestionBtn");
    
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const feedbackText = document.getElementById("feedbackText");
    const fallingNamesContainer = document.getElementById("fallingNamesContainer");

    // الخطوة 1: فتح البريد وإظهار الرسالة بوضوح
    openEnvelopeBtn.addEventListener("click", () => {
        openEnvelopeBtn.classList.add("open");
    });

    // عند الضغط على زر Next داخل البريد الانتقال لحديقة الزهور وتشغيل أنميشن التفتح
    nextToRoseBtn.addEventListener("click", () => {
        stepEnvelope.classList.add("hidden");
        stepRose.classList.remove("hidden");
        // إزالة حالة التوقف لتتفتح الوردات الـ 5 بإنيميشن ساحر
        setTimeout(() => {
            stepRose.classList.remove("not-loaded");
        }, 100);
    });

    // الانتقال من حديقة الزهور إلى السؤال
    nextToQuestionBtn.addEventListener("click", () => {
        stepRose.classList.add("hidden");
        stepQuestion.classList.remove("hidden");
    });

    // التفاعل مع أزرار السؤال
    noBtn.addEventListener("click", () => {
        feedbackText.classList.remove("hidden");
        feedbackText.textContent = "matkdbich alayla llah ihdik ";
    });

    yesBtn.addEventListener("click", () => {
        feedbackText.classList.add("hidden");
        triggerFallingNames();
    });

    // دالة تساقط ونقز اسم LAYLA في أعلى الشاشة وتألق
    function triggerFallingNames() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const nameEl = document.createElement("div");
                nameEl.classList.add("falling-name");
                nameEl.textContent = "LAYLA ❤️";
                
                nameEl.style.left = Math.random() * 80 + 10 + "vw";
                nameEl.style.animationDelay = (Math.random() * 0.3) + "s";
                
                fallingNamesContainer.appendChild(nameEl);

                setTimeout(() => {
                    nameEl.remove();
                }, 4000);
            }, i * 130);
        }
    }
});