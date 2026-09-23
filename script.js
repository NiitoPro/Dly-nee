/* ====== ПАРОЛЬ ====== */
// Дата знакомства: 07.06.2026 -> 07062026
const SECRET = "07062026";

function unlock(){
  const val = document.getElementById('pass').value.trim();
  if(val === SECRET){
    localStorage.setItem('unlocked', '1');
    document.getElementById('lock').classList.add('hidden');
    document.getElementById('main').classList.remove('hidden');
  } else {
    document.getElementById('err').textContent = 'Попробуй ещё раз ❤️';
  }
}

if(localStorage.getItem('unlocked') === '1'){
  const lock = document.getElementById('lock');
  const main = document.getElementById('main');
  if(lock && main){
    lock.classList.add('hidden');
    main.classList.remove('hidden');
  }
}

document.addEventListener('keydown', e => {
  if(e.key === 'Enter' && document.getElementById('pass')){
    unlock();
  }
});

/* ====== 50 ПРИЧИН ====== */
const reasons = [
  "За то, что именно я пишу тебе «доброе утро» почти каждый день, потому что ты — первое, о чём я думаю, когда просыпаюсь.",
  "За то, что ты называешь меня «молочным зубиком».",
  "За твоё «Спокойной ночи, писюнчик».",
  "За твой картавый «мур» в голосовых.",
  "За то, что ты сказала: «Ты первый, кому я это рассказываю».",
  "За твоё «Ты меня слушаешь и слышишь».",
  "За то, что ты ревнуешь меня к другим девочкам в дуо.",
  "За твоё «Не играй с другими девочками, я не хочу».",
  "За то, как ты злишься на тиммейтов в MLBB.",
  "За твоё «У меня овуляция» как объяснение всего.",
  "За твоё «У меня ПМС, я ненавижу людей».",
  "За то, что ты не стесняешься своих фетишей и доверяешь их мне.",
  "За твоё «Я люблю, когда меня душат».",
  "За то, что ты хочешь попробовать связание и «секс со спящей».",
  "За твоё «Мечта оказаться на месте девчонки из того хентыча про остановку времени».",
  "За то, что ты фанатеешь от Годжо Сатору и заказала себе дакимакуру с ним.",
  "За твоё «Тяжело общаться с человеком, который не течёт по Годжо».",
  "За то, что ты смотрела «Магическую битву» и плакала над ней.",
  "За то, что ты ждала «Атаку титанов» с 2013 по 2023 год.",
  "За твоё «Я была оффницей» — ты носила чёрное, пентаграммы и слушала Кровосток.",
  "За то, что ты читала «Сатанинскую библию» и вынесла оттуда: «жить в кайф, но никому не вредить».",
  "За твоё «В следующей жизни хочу переродиться аниме тяночкой из Китая или Японии».",
  "За то, что ты работаешь инженером и разбираешься в трубопроводах и сетях.",
  "За твоё «Я ушла после 10 класса».",
  "За то, что ты старше меня и не боишься этого.",
  "За твоё «Тебе 16, а мне 25, я совратила мальчика».",
  "За то, что ты шутишь про «посадят за совращение малолетних».",
  "За твоё «Ты мой единственный школьник».",
  "За то, что ты называешь меня «кид» и «пиздюк».",
  "За твоё «Нельзя нервничать, у меня розацеа».",
  "За то, что ты не пьёшь горячее и не ходишь в баню.",
  "За то, что ты ешь мороженое только из морозилки.",
  "За твоё «Люблю сало» — с чесноком и чёрным хлебом.",
  "За то, что ты пьёшь пиво и называешь себя «лудоманом».",
  "За то, как ты радуешься, когда выпадает скин в MLBB.",
  "За твоё «Мне выпала Кагура!».",
  "За то, что ты мечтаешь о скине с Годжо на Ксавьера.",
  "За твоё «Я хочу этот скин, он красивый».",
  "За то, что ты называешь меня «бустером».",
  "За твоё «Мы обязаны апнуть соточку».",
  "За то, что ты терпишь мои сливы в рейте.",
  "За твоё «Го каточку?».",
  "За то, что ты сказала: «Я чувствую к тебе привязанность».",
  "За твоё «Ты мне дорог».",
  "За то, что ты извиняешься, когда была резкой.",
  "За твоё «Я не хочу тебя терять».",
  "За то, что ты скучаешь.",
  "За то, что ты есть в моей жизни.",
  "За каждый день, который мы провели вместе в переписке.",
  "За то, что ты — это ты. Настя. Моя жопочка. Моя попочка. Моя любимая."
];

function buildReasons(){
  const grid = document.getElementById('grid');
  const counter = document.getElementById('counter');
  if(!grid) return;

  reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<span class="num">${i+1}</span><span class="txt">${text}</span>`;
    card.onclick = () => {
      card.classList.toggle('open');
      updateCounter();
    };
    grid.appendChild(card);
  });

  function updateCounter(){
    const open = document.querySelectorAll('.card.open').length;
    counter.textContent = open + ' / ' + reasons.length;
  }

  window.revealAll = () => {
    document.querySelectorAll('.card').forEach(c => c.classList.add('open'));
    updateCounter();
  };
}

/* ====== СЕРДЕЧКИ ====== */
(function hearts(){
  const box = document.querySelector('.hearts');
  if(!box) return;
  const symbols = ['❤️','💕','💗','🌹','✨','💖'];
  for(let i = 0; i < 20; i++){
    const s = document.createElement('span');
    s.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (9 + Math.random()*12) + 's';
    s.style.animationDelay = (Math.random()*12) + 's';
    s.style.fontSize = (14 + Math.random()*20) + 'px';
    box.appendChild(s);
  }
})();