// 48개 문항
const questions = [
    // E-I 12문항
    {category:"에너지 방향",text:"모임이나 파티에서 시간을 보낸 후, 나는 주로...",options:[{text:"에너지가 충전되어 더 활기차진다",type:"E"},{text:"에너지가 소모되어 혼자만의 시간이 필요하다",type:"I"}]},
    {category:"에너지 방향",text:"새로운 아이디어가 떠올랐을 때, 나는 먼저...",options:[{text:"다른 사람들과 이야기하며 발전시킨다",type:"E"},{text:"혼자 충분히 생각한 후에 공유한다",type:"I"}]},
    {category:"에너지 방향",text:"휴일에 가장 편안한 시간은...",options:[{text:"친구들을 만나거나 외출하는 시간",type:"E"},{text:"집에서 조용히 보내는 시간",type:"I"}]},
    {category:"에너지 방향",text:"대화할 때 나는 주로...",options:[{text:"생각하면서 동시에 말한다",type:"E"},{text:"충분히 생각한 후에 말한다",type:"I"}]},
    {category:"에너지 방향",text:"문제가 생겼을 때, 나는...",options:[{text:"여러 사람과 의논하며 해결책을 찾는다",type:"E"},{text:"혼자 깊이 고민한 후 해결책을 찾는다",type:"I"}]},
    {category:"에너지 방향",text:"나를 더 잘 아는 사람은...",options:[{text:"다양한 친구들과 지인들",type:"E"},{text:"오래되고 깊은 소수의 친구들",type:"I"}]},
    {category:"에너지 방향",text:"교회 소그룹에서 나는...",options:[{text:"적극적으로 의견을 나누고 대화를 이끈다",type:"E"},{text:"다른 사람들의 이야기를 경청하고 필요할 때 말한다",type:"I"}]},
    {category:"에너지 방향",text:"스트레스를 받으면 나는...",options:[{text:"친구를 만나거나 활동적인 것을 한다",type:"E"},{text:"혼자 조용히 시간을 보내며 정리한다",type:"I"}]},
    {category:"에너지 방향",text:"일할 때 나는...",options:[{text:"사람들과 함께할 때 더 효율적이다",type:"E"},{text:"혼자 집중할 때 더 효율적이다",type:"I"}]},
    {category:"에너지 방향",text:"전화 통화에 대해 나는...",options:[{text:"전화로 대화하는 것이 편하다",type:"E"},{text:"가능하면 문자나 메시지를 선호한다",type:"I"}]},
    {category:"에너지 방향",text:"새로운 환경에서 나는...",options:[{text:"먼저 다가가서 사람들과 어울린다",type:"E"},{text:"상황을 살피며 천천히 적응한다",type:"I"}]},
    {category:"에너지 방향",text:"기도할 때 나는...",options:[{text:"함께 모여 기도하는 것이 은혜롭다",type:"E"},{text:"조용히 혼자 기도하는 것이 은혜롭다",type:"I"}]},
    // S-N 12문항
    {category:"인식 기능",text:"성경을 읽을 때 나는...",options:[{text:"구체적인 역사적 사실과 맥락에 관심이 간다",type:"S"},{text:"숨겨진 의미와 상징, 영적 교훈에 관심이 간다",type:"N"}]},
    {category:"인식 기능",text:"계획을 세울 때 나는...",options:[{text:"현실적이고 구체적인 단계를 먼저 생각한다",type:"S"},{text:"큰 그림과 최종 목표를 먼저 생각한다",type:"N"}]},
    {category:"인식 기능",text:"설교를 들을 때 나는...",options:[{text:"실제 적용 가능한 구체적인 가르침을 선호한다",type:"S"},{text:"새로운 관점과 영감을 주는 메시지를 선호한다",type:"N"}]},
    {category:"인식 기능",text:"문제 상황에서 나는...",options:[{text:"과거의 경험과 검증된 방법을 활용한다",type:"S"},{text:"새로운 접근법과 가능성을 탐색한다",type:"N"}]},
    {category:"인식 기능",text:"대화할 때 나는...",options:[{text:"구체적인 사실과 세부사항에 집중한다",type:"S"},{text:"전체적인 의미와 맥락에 집중한다",type:"N"}]},
    {category:"인식 기능",text:"일상생활에서 나는...",options:[{text:"현재에 충실하고 실질적인 것을 중시한다",type:"S"},{text:"미래의 가능성과 변화를 생각한다",type:"N"}]},
    {category:"인식 기능",text:"새로운 것을 배울 때 나는...",options:[{text:"단계별로 차근차근 익히는 것이 좋다",type:"S"},{text:"전체 개념을 먼저 파악한 후 세부사항을 배운다",type:"N"}]},
    {category:"인식 기능",text:"나는 주로...",options:[{text:"오감으로 경험할 수 있는 것을 신뢰한다",type:"S"},{text:"직감이나 육감을 신뢰한다",type:"N"}]},
    {category:"인식 기능",text:"책이나 영화를 볼 때 나는...",options:[{text:"현실적인 이야기를 선호한다",type:"S"},{text:"상상력이 풍부한 이야기를 선호한다",type:"N"}]},
    {category:"인식 기능",text:"지시를 받을 때 나는...",options:[{text:"명확하고 구체적인 지시를 선호한다",type:"S"},{text:"목표만 주어지고 방법은 자유로운 것을 선호한다",type:"N"}]},
    {category:"인식 기능",text:"하나님의 인도하심을 느낄 때...",options:[{text:"구체적인 상황이나 사람을 통해 느낀다",type:"S"},{text:"마음속의 확신이나 내적 음성으로 느낀다",type:"N"}]},
    {category:"인식 기능",text:"나의 강점은...",options:[{text:"실제적이고 현실적인 문제 해결",type:"S"},{text:"창의적이고 혁신적인 아이디어 제안",type:"N"}]},
    // T-F 12문항
    {category:"판단 기능",text:"중요한 결정을 내릴 때 나는...",options:[{text:"논리적 분석과 객관적 기준을 우선한다",type:"T"},{text:"관련된 사람들의 감정과 가치를 우선한다",type:"F"}]},
    {category:"판단 기능",text:"친구가 고민을 털어놓을 때 나는...",options:[{text:"문제 해결을 위한 조언을 먼저 한다",type:"T"},{text:"감정적으로 공감하고 위로를 먼저 한다",type:"F"}]},
    {category:"판단 기능",text:"갈등 상황에서 나는...",options:[{text:"옳고 그름을 명확히 하는 것이 중요하다",type:"T"},{text:"관계의 회복과 화합이 더 중요하다",type:"F"}]},
    {category:"판단 기능",text:"비판을 받았을 때 나는...",options:[{text:"내용이 타당한지 객관적으로 평가한다",type:"T"},{text:"먼저 감정적으로 상처를 받는다",type:"F"}]},
    {category:"판단 기능",text:"칭찬을 할 때 나는...",options:[{text:"구체적인 성과나 능력을 인정한다",type:"T"},{text:"노력과 마음, 인격을 인정한다",type:"F"}]},
    {category:"판단 기능",text:"팀에서 의견 충돌이 있을 때 나는...",options:[{text:"가장 합리적인 의견이 채택되어야 한다",type:"T"},{text:"모두가 수용할 수 있는 합의점을 찾아야 한다",type:"F"}]},
    {category:"판단 기능",text:"규칙을 어긴 사람에게 나는...",options:[{text:"규칙은 공평하게 적용되어야 한다",type:"T"},{text:"상황과 사정을 먼저 이해해야 한다",type:"F"}]},
    {category:"판단 기능",text:"좋은 리더란...",options:[{text:"공정하고 합리적인 판단을 하는 사람",type:"T"},{text:"팀원들을 잘 이해하고 배려하는 사람",type:"F"}]},
    {category:"판단 기능",text:"나는 다른 사람들에게...",options:[{text:"논리적이고 분석적이라는 말을 듣는다",type:"T"},{text:"따뜻하고 공감을 잘한다는 말을 듣는다",type:"F"}]},
    {category:"판단 기능",text:"토론에서 나는...",options:[{text:"논리의 일관성과 타당성에 집중한다",type:"T"},{text:"상대방의 입장과 감정도 함께 고려한다",type:"F"}]},
    {category:"판단 기능",text:"하나님의 정의와 사랑 중...",options:[{text:"하나님의 공의와 진리가 더 와닿는다",type:"T"},{text:"하나님의 사랑과 은혜가 더 와닿는다",type:"F"}]},
    {category:"판단 기능",text:"일이 잘못되었을 때 나는...",options:[{text:"원인을 분석하고 개선점을 찾는다",type:"T"},{text:"관련된 사람들의 마음을 먼저 살핀다",type:"F"}]},
    // J-P 12문항
    {category:"생활 양식",text:"여행을 갈 때 나는...",options:[{text:"미리 상세한 일정을 계획한다",type:"J"},{text:"대략적인 방향만 정하고 즉흥적으로 움직인다",type:"P"}]},
    {category:"생활 양식",text:"마감이 있는 일을 할 때 나는...",options:[{text:"미리미리 준비하여 여유 있게 마무리한다",type:"J"},{text:"마감이 다가와야 집중이 잘 된다",type:"P"}]},
    {category:"생활 양식",text:"일상생활에서 나는...",options:[{text:"정해진 루틴과 습관이 있다",type:"J"},{text:"그날그날 기분에 따라 다르게 보낸다",type:"P"}]},
    {category:"생활 양식",text:"결정을 내릴 때 나는...",options:[{text:"빨리 결정하고 실행으로 옮긴다",type:"J"},{text:"여러 가능성을 열어두고 천천히 결정한다",type:"P"}]},
    {category:"생활 양식",text:"약속 시간에 나는...",options:[{text:"항상 약속 시간 전에 도착한다",type:"J"},{text:"종종 약속 시간에 맞추거나 조금 늦는다",type:"P"}]},
    {category:"생활 양식",text:"일을 처리할 때 나는...",options:[{text:"한 가지를 끝내고 다음 일을 시작한다",type:"J"},{text:"여러 가지를 동시에 진행한다",type:"P"}]},
    {category:"생활 양식",text:"계획이 변경되면 나는...",options:[{text:"스트레스를 받고 불편하다",type:"J"},{text:"새로운 가능성으로 받아들인다",type:"P"}]},
    {category:"생활 양식",text:"내 방이나 책상은...",options:[{text:"정돈되어 있고 체계가 있다",type:"J"},{text:"나만의 질서가 있지만 다소 어수선하다",type:"P"}]},
    {category:"생활 양식",text:"주말에 나는...",options:[{text:"미리 계획을 세워둔다",type:"J"},{text:"그때그때 하고 싶은 것을 한다",type:"P"}]},
    {category:"생활 양식",text:"할 일 목록에 대해 나는...",options:[{text:"목록을 만들고 하나씩 체크하는 것이 좋다",type:"J"},{text:"목록 없이도 잘 기억하고 처리한다",type:"P"}]},
    {category:"생활 양식",text:"교회 봉사를 할 때 나는...",options:[{text:"미리 계획하고 준비하는 것을 좋아한다",type:"J"},{text:"상황에 따라 유연하게 대처하는 것을 좋아한다",type:"P"}]},
    {category:"생활 양식",text:"쇼핑을 할 때 나는...",options:[{text:"필요한 것을 미리 정하고 구매한다",type:"J"},{text:"돌아다니다가 마음에 드는 것을 산다",type:"P"}]}
];

// 상태 관리
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

function startTest() {
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('testScreen').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionCategory').textContent = q.category;
    document.getElementById('questionText').textContent = q.text;
    document.getElementById('optionsContainer').innerHTML = q.options.map((opt, i) => `
        <div class="option ${answers[currentQuestion] === i ? 'selected' : ''}" onclick="selectOption(${i})">
            <div class="option-radio"></div>
            <span class="option-text">${opt.text}</span>
        </div>
    `).join('');
    document.getElementById('progressCount').textContent = `${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('progressFill').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    document.getElementById('btnPrev').disabled = currentQuestion === 0;
    document.getElementById('btnNext').disabled = answers[currentQuestion] === null;
    document.getElementById('btnNext').textContent = currentQuestion === questions.length - 1 ? '결과 보기' : '다음';
}

function selectOption(i) { answers[currentQuestion] = i; renderQuestion(); }
function nextQuestion() { if (currentQuestion < questions.length - 1) { currentQuestion++; renderQuestion(); } else { showResult(); } }
function prevQuestion() { if (currentQuestion > 0) { currentQuestion--; renderQuestion(); } }

function calculateMBTI() {
    let s = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
    answers.forEach((a, i) => { if (a !== null) s[questions[i].options[a].type]++; });
    return (s.E >= s.I ? 'E' : 'I') + (s.S >= s.N ? 'S' : 'N') + (s.T >= s.F ? 'T' : 'F') + (s.J >= s.P ? 'J' : 'P');
}

function showResult() {
    const mbti = calculateMBTI();
    const c = bibleCharacters[mbti];
    document.getElementById('testScreen').style.display = 'none';
    const rs = document.getElementById('resultScreen');
    rs.style.display = 'block';
    rs.innerHTML = `
    <div class="fade-in">
        <div class="result-type-badge">${mbti}</div>
        <div class="result-character">${c.emoji}</div>
        <h1 class="result-name">${c.name}</h1>
        <p class="result-title">${c.title}</p>
        <div class="result-card">
            <div class="result-section"><h3>📖 성경 속 이야기</h3><p>${c.description}</p></div>
            <div class="result-section"><h3>✨ 핵심 특성</h3><div class="result-traits">${c.traits.map(t=>`<span class="trait-tag">${t}</span>`).join('')}</div></div>
            <div class="result-section"><h3>💪 나의 강점</h3><p>${c.strengthsDetail}</p></div>
            <div class="result-section"><h3>⚡ 나의 약점</h3><p>${c.weaknessesDetail}</p></div>
            <div class="result-section"><h3>🙏 신앙적 조언</h3><p>${c.faithAdvice}</p></div>
            <div class="result-section"><h3>📜 어울리는 말씀</h3><div class="result-verse"><p>"${c.verseText}"</p><cite>- ${c.verseRef}</cite></div><p style="margin-top:12px;font-size:14px;color:var(--text-secondary)">${c.verseExplanation}</p></div>
            <div class="result-section"><h3>🤝 잘 어울리는 성경 인물</h3><p><strong>${c.compatibleCharacter}</strong></p><p style="margin-top:8px">${c.compatibleReason}</p></div>
        </div>
        <div class="share-buttons">
            <button class="btn-share btn-retry" onclick="retryTest()">다시 하기</button>
            <button class="btn-share btn-copy" onclick="copyResult('${mbti}','${c.name}')">결과 복사</button>
        </div>
    </div>`;
}

function retryTest() {
    currentQuestion = 0; answers = new Array(questions.length).fill(null);
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('introScreen').style.display = 'block';
}

function copyResult(mbti, name) {
    const c = bibleCharacters[mbti];
    const text = `🎯 나의 성경 MBTI 결과\n\n유형: ${mbti}\n성경 인물: ${name} (${c.title})\n\n${c.traits.join(', ')}\n\n📜 "${c.verseText}" - ${c.verseRef}\n\n비전어드벤처 성경인물 MBTI 테스트에서 확인해보세요!`;
    navigator.clipboard.writeText(text).then(() => alert('결과가 복사되었습니다!'));
}
