
// 텍스트 랜덤 슬라이드
const korBtn = document.querySelector('.active_menus ul li a:nth-of-type(1) span');
const engBtn = document.querySelector('.active_menus ul li a:nth-of-type(2) span');

const textSlide = document.getElementById("textSlide");

const keywordsEng = [
  "Responsibility","Golf","Baseball","Football","Game","Multifaceted",
  "Adaptable","Resilient","Collaborative","Reliable"
  ];
const keywordsKor = [
  "책임감", "골프", "야구", "축구", "게임", "다재다능함",
  "적응력", "회복력", "협력적","신뢰할 수 있는"
];

// 텍스트 슬라이드 업데이트 함수
function updateTextSlide(keywords) {
  textSlide.innerHTML = ''; // 기존 텍스트 제거
  keywords.forEach((word) => {
    const span = document.createElement('span');
    span.classList.add('keyword');
    span.textContent = word;

    const randomTop = Math.random() * (textSlide.clientHeight - 100);
    span.style.top = randomTop + "px";

    const duration = 10 + Math.random() * 10;
    span.style.animationDuration = duration + "s";

    const delay = Math.random() * 9;
    span.style.animationDelay = delay + "s";

    textSlide.appendChild(span);
  });
}
// 언어 변경 이벤트
korBtn.addEventListener("click", () => {
  updateTextSlide(keywordsKor);
  korBtn.classList.add("active");
  engBtn.classList.remove("active");
});

engBtn.addEventListener("click", () => {
  updateTextSlide(keywordsEng);
  engBtn.classList.add("active");
  korBtn.classList.remove("active");
});

// 초기 언어 설정 (영어 기본)
updateTextSlide(keywordsEng);

  //텍스트 슬라이드 오토/포즈 버튼
const autoBtn = document.getElementById('autoBtn');
const pauseBtn = document.getElementById('pauseBtn');

function setAnimationState (state){
    const keywords =document.querySelectorAll('#textSlide .keyword');
    keywords.forEach(item => {
        item.style.animationPlayState = state
    })
  };

autoBtn.addEventListener('click', ()=>{
    setAnimationState('running');
    autoBtn.classList.add('active');
    pauseBtn.classList.remove('active');
  });
pauseBtn.addEventListener('click', ()=>{
    setAnimationState('paused');
    pauseBtn.classList.add('active');
    autoBtn.classList.remove('active');
  });

  // 육각형 데이터
const initialData = [0,0,0,0,0,0]
const finalData1 = [80,70,60,90,75,85]
const finalData2 = [90,75,70,80,0,0]

const labels1 = [
    "Communication", "Leadership", "Problem Solving", "Teamwork", "Design", "Coding"]
const labels2 = [
    "HTML,CSS", "Javascript", "React", "SQL", "node.js", "Python"]  

const data1 = {
    labels: labels1,
    datasets:[
        {
            label : '',
            data:initialData,
            fill:true,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderColor: "#fff",
            pointBackgroundColor: "#fff",
            pointBorderColor:"#111",
            pointRadius:5
        }
    ]
    };
const data2 = {
        labels: labels2,
        datasets:[
            {
                label : '',
                data:initialData,
                fill:true,
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderColor: "#fff",
                pointBackgroundColor: "#fff",
                pointBorderColor:"#111",
                pointRadius:5
            }
        ]
        };

const config1 = {
            type: "radar",
            data: data1,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              aspectRatio: 1,
              scales: {
                r: {
                  min: 0,
                  max: 100,
                  /* 축의 눈금(숫자) 스타일 */
                  ticks: {
                    color: "#fff",                // 숫자 색
                    backdropColor: "transparent", // 숫자 뒤 배경 (기본 흰색 박스) 제거
                    font: {
                      size: 13,                   // 숫자 폰트 크기
                      family: "Noto Sans KR",     // 폰트
                      weight: "normal"            // 폰트 두께
                    }
                  },
                  /* 축의 라벨(각 꼭지점 이름) 스타일 */
                  pointLabels: {
                    color: "#fff",                // 라벨 색
                    font: {
                      size: 18,                   // 라벨 폰트 크기
                      family: "Racing Sans One",
                      weight: "normal"
                    }
                  },
                  /* 내부 원형선, 각도선 색상 */
                  grid: {
                    color: "rgba(255,255,255,0.2)"
                  },
                  angleLines: {
                    color: "rgba(255,255,255,0.3)"
                  }
                }
              },
              plugins: {
                /* 범례(legend) 스타일 */
                legend: {
                  display: true,
                  labels: {
                    color: "#fff",
                    font: {
                      size: 15,
                      family: "Noto Sans KR"
                    }
                  }
                },
                /* 차트 제목(title) */
                title: {
                  display: true,
                  text: "My Character",
                  color: "#fff",
                  font: {
                    size: 18,
                    family: "Racing Sans One",
                    weight: "normal"
                  }
                }
              }
            }
          };

const config2 = {
            type: "radar",
            data: data2,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              aspectRatio: 1,
              scales: {
                r: {
                  min: 0,
                  max: 100,
                  /* 축의 눈금(숫자) 스타일 */
                  ticks: {
                    color: "#fff",                // 숫자 색
                    backdropColor: "transparent", // 숫자 뒤 배경 (기본 흰색 박스) 제거
                    font: {
                      size: 13,                   // 숫자 폰트 크기
                      family: "Noto Sans KR",     // 폰트
                      weight: "normal"            // 폰트 두께
                    }
                  },
                  /* 축의 라벨(각 꼭지점 이름) 스타일 */
                  pointLabels: {
                    color: "#fff",                // 라벨 색
                    font: {
                      size: 18,                   // 라벨 폰트 크기
                      family: "Racing Sans One",
                      weight: "normal"
                    }
                  },
                  /* 내부 원형선, 각도선 색상 */
                  grid: {
                    color: "rgba(255,255,255,0.2)"
                  },
                  angleLines: {
                    color: "rgba(255,255,255,0.3)"
                  }
                }
              },
              plugins: {
                /* 범례(legend) 스타일 */
                legend: {
                  display: true,
                  labels: {
                    color: "#fff",
                    font: {
                      size: 15,
                      family: "Noto Sans KR"
                    }
                  }
                },
                /* 차트 제목(title) */
                title: {
                  display: true,
                  text: "My Ability",
                  color: "#fff",
                  font: {
                    size: 18,
                    family: "Racing Sans One",
                    weight: "normal"
                  }
                }
              }
            }
          };


const ctx1 = document.getElementById('skill-chart1').getContext("2d");
const ctx2 = document.getElementById('skill-chart2').getContext("2d");
const chart1 = new Chart(ctx1, config1);
const chart2 = new Chart(ctx2, config2);

const observer = new IntersectionObserver((entries, obs)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                chart1.options.animation.duration = 2000;
                chart2.options.animation.duration = 2000;
                chart1.data.datasets[0].data = finalData1;
                chart2.data.datasets[0].data = finalData2;
                chart1.update();
                chart2.update();

                obs.unobserve(entry.target);
            }
        })
    })
observer.observe(document.querySelector(".chart-container"))

const btn = document.querySelector(".topBtn");
const windowHeight = window.innerHeight;

btn.addEventListener('click',function(){
  if(window.scrollY < windowHeight){
    window.scrollTo({top:windowHeight, behavior:'smooth'});
  }else{
    window.scrollTo({top:0, behavior:'smooth'});
  }
})
window.addEventListener('scroll', function(){
  if(this.window.scrollY >= windowHeight){
    btn.textContent = 'To the Top▲'
  }else{
    btn.textContent = 'To the Down▼'
  }
})
//top & down button

const modalBtn =document.querySelector('.modalBtn');
const modalOverlay = document.querySelector('.modalOverlay');
const modalQuick = document.querySelectorAll('.modalBox ul li a');

modalBtn.addEventListener('click', function(){
  modalBtn.classList.toggle('active');
  modalOverlay.classList.toggle('active');
});
modalQuick.forEach(link =>{
  link.addEventListener('click', function(){
    modalOverlay.classList.remove('active');
    modalBtn.classList.remove('active');
  })
})
//modal End