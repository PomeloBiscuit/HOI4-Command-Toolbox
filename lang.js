const baseDescriptions = {
  // 側邊欄選單
  section_common_title: {
    zh: "🔁 常用指令",
    en: "🔁 Top Commands",
    ja: "🔁 よく使うコマンド",
    ko: "🔁 자주 쓰는 명령어",
    es: "🔁 Comandos frecuentes",
    pt: "🔁 Comandos frequentes",
    ru: "🔁 Частые команды"
  },
  nav_domestic: {
    zh: "🧰 內政外交",
    en: "🧰 Politics",
    ja: "🧰 内政・外交",
    ko: "🧰 내정 및 외교",
    es: "🧰 Política",
    pt: "🧰 Política",
    ru: "🧰 Внутренняя политика"
  },
  nav_territory: {
    zh: "🗺 領土控制",
    en: "🗺 Territory",
    ja: "🗺 領土",
    ko: "🗺 영토",
    es: "🗺 Territorio",
    pt: "🗺 Território",
    ru: "🗺 Территория"
  },
  nav_research: {
    zh: "🧪 科技研究",
    en: "🧪 Research",
    ja: "🧪 研究",
    ko: "🧪 연구",
    es: "🧪 Investigación",
    pt: "🧪 Pesquisa",
    ru: "🧪 Исследования"
  },
  nav_army: {
    zh: "⚔ 戰爭部隊",
    en: "⚔ Army",
    ja: "⚔ 戦闘",
    ko: "⚔ 군대",
    es: "⚔ Ejército",
    pt: "⚔ Exército",
    ru: "⚔ Армия"
  },
  nav_generals: {
    zh: "🎖 將領經驗",
    en: "🎖 Generals",
    ja: "🎖 将軍",
    ko: "🎖 장군",
    es: "🎖 Generales",
    pt: "🎖 Generais",
    ru: "🎖 Генералы"
  },
  nav_resources: {
    zh: "🛢 資源能源",
    en: "🛢 Resources",
    ja: "🛢 資源",
    ko: "🛢 자원",
    es: "🛢 Recursos",
    pt: "🛢 Recursos",
    ru: "🛢 Ресурсы"
  },
  nav_spies: {
    zh: "🕵️ 間諜特工",
    en: "🕵️ Spies",
    ja: "🕵️ 諜報",
    ko: "🕵️ 첩보",
    es: "🕵️ Espías",
    pt: "🕵️ Espiões",
    ru: "🕵️ Шпионы"
  },
  nav_hidden: {
    zh: "💥 隱藏指令",
    en: "💥 Hidden",
    ja: "💥 隠しコマンド",
    ko: "💥 숨겨진 명령어",
    es: "💥 Secretos",
    pt: "💥 Ocultos",
    ru: "💥 Секретные"
  },
  nav_industry: {
    zh: "🏭 工業設計",
    en: "🏭 Industry",
    ja: "🏭 産業",
    ko: "🏭 산업",
    es: "🏭 Industria",
    pt: "🏭 Indústria",
    ru: "🏭 Промышленность"
  },
  nav_equipment: {
    zh: "🔢 裝備代碼表",
    en: "🔢 Equipment",
    ja: "🔢 装備コード",
    ko: "🔢 장비 코드",
    es: "🔢 Equipamiento",
    pt: "🔢 Equipamento",
    ru: "🔢 Снаряжение"
  },
  section_domestic:{
    zh: "🧰 內政外交",
    en: "🧰 Politics",
    ja: "🧰 内政・外交",
    ko: "🧰 내정 및 외교",
    es: "🧰 Política",
    pt: "🧰 Política",
    ru: "🧰 Внутренняя политика"
  },
  section_2_title:{
    zh: "🗺 領土控制",
    en: "🗺 Territory",
    ja: "🗺 領土",
    ko: "🗺 영토",
    es: "🗺 Territorio",
    pt: "🗺 Território",
    ru: "🗺 Территория"
  },
  section_3_title:{
    zh: "🧪 科技研究",
    en: "🧪 Research",
    ja: "🧪 研究",
    ko: "🧪 연구",
    es: "🧪 Investigación",
    pt: "🧪 Pesquisa",
    ru: "🧪 Исследования"
  },
  section_4_title:{
    zh: "⚔ 戰爭部隊",
    en: "⚔ Army",
    ja: "⚔ 戦闘",
    ko: "⚔ 군대",
    es: "⚔ Ejército",
    pt: "⚔ Exército",
    ru: "⚔ Армия"
  },  
  section_5_title:{
    zh: "🎖 將領經驗",
    en: "🎖 Generals",
    ja: "🎖 将軍",
    ko: "🎖 장군",
    es: "🎖 Generales",
    pt: "🎖 Generais",
    ru: "🎖 Генералы"
  },
  section_6_title:{
    zh: "🛢 資源能源",
    en: "🛢 Resources",
    ja: "🛢 資源",
    ko: "🛢 자원",
    es: "🛢 Recursos",
    pt: "🛢 Recursos",
    ru: "🛢 Ресурсы"
  },
  section_7_title:{
    zh: "🕵️ 間諜特工",
    en: "🕵️ Spies",
    ja: "🕵️ 諜報",
    ko: "🕵️ 첩보",
    es: "🕵️ Espías",
    pt: "🕵️ Espiões",
    ru: "🕵️ Шпионы"
  },
  section_8_title:{
    zh: "💥 隱藏指令",
    en: "💥 Hidden",
    ja: "💥 隠しコマンド",
    ko: "💥 숨겨진 명령어",
    es: "💥 Secretos",
    pt: "💥 Ocultos",
    ru: "💥 Секретные"
  }, 
  section_9_title:{
    zh: "🏭 工業設計",
    en: "🏭 Industry",
    ja: "🏭 産業",
    ko: "🏭 산업",
    es: "🏭 Industria",
    pt: "🏭 Indústria",
    ru: "🏭 Промышленность"
  }, 
  section_mod_title: {
    zh: "🧩 模組擴充指令",
    en: "🧩 Mod Commands",
    ja: "🧩 Mod コマンド",
    ko: "🧩 모드 명령어",
    es: "🧩 Comandos de Mod",
    pt: "🧩 Comandos de Mod",
    ru: "🧩 Команды модов"
  },
  section_ideology_title: {
    zh: "🧠 意識形態指令",
    en: "🧠 Ideology Commands",
    ja: "🧠 イデオロギー コマンド",
    ko: "🧠 이념 명령어",
    es: "🧠 Comandos Ideológicos",
    pt: "🧠 Comandos de Ideologia",
    ru: "🧠 Команды идеологии"
  },
  ideology_main: {
    zh: "📌 常用意識形態代碼",
    en: "📌 Common Ideology Codes",
    ja: "📌 よく使うイデオロギーコード",
    ko: "📌 자주 쓰이는 이념 코드",
    es: "📌 Códigos de ideología comunes",
    pt: "📌 Códigos comuns de ideologia",
    ru: "📌 Часто используемые коды идеологий"
  },
  ideology_mod: {
    zh: "🧩 模組延伸意識形態（需模組支援）",
    en: "🧩 Modded Ideologies (Requires Mod Support)",
    ja: "🧩 Mod 拡張イデオロギー（Modが必要）",
    ko: "🧩 모드 확장 이념 (모드 필요)",
    es: "🧩 Ideologías de mods (requiere soporte del mod)",
    pt: "🧩 Ideologias de mod (requerem suporte do mod)",
    ru: "🧩 Идеологии из модов (требуется поддержка мода)"
  },
  ideology_tag: {
    zh: "🌍 常用國家代碼",
    en: "🌍 Common Country Tags",
    ja: "🌍 よく使う国家タグ",
    ko: "🌍 자주 사용하는 국가 태그",
    es: "🌍 Etiquetas de países comunes",
    pt: "🌍 Tags de países comuns",
    ru: "🌍 Часто используемые теги стран"
  },
  ideology_province: {
    zh: "🧭 使用省份與州 ID 的技巧",
    en: "🧭 Tips for Using Province and State IDs",
    ja: "🧭 州・プロヴィンスIDの活用テクニック",
    ko: "🧭 지방 및 주 ID 활용 팁",
    es: "🧭 Consejos para usar IDs de provincias y estados",
    pt: "🧭 Dicas para usar IDs de província e estado",
    ru: "🧭 Советы по использованию ID провинций и штатов"
  },
  
  map_shortcuts: {
    zh: "🗺 地圖快捷鍵",
    en: "🗺 Map Shortcuts",
    ja: "🗺 マップショートカット",
    ko: "🗺 지도 단축키",
    es: "🗺 Atajos de Mapa",
    pt: "🗺 Atalhos de Mapa",
    ru: "🗺 Горячие клавиши карты"
  },
  section_examples: {
    zh: "📌 使用範例",
    en: "📌 Examples",
    ja: "📌 使用例",
    ko: "📌 사용 예시",
    es: "📌 Ejemplos",
    pt: "📌 Exemplos",
    ru: "📌 Примеры"
  },
  section_index: {
    zh: "📖 指令分類總覽",
    en: "📖 Command Index",
    ja: "📖 コマンドインデックス",
    ko: "📖 명령어 인덱스",
    es: "📖 Índice de Comandos",
    pt: "📖 Índice de Comandos",
    ru: "📖 Указатель команд"
  },
  // 指令分類總覽
  index_politics: {
    zh: "🧰 內政外交： ",
    en: "🧰 Politics： ",
    ja: "🧰 内政・外交： ",
    ko: "🧰 내정 및 외교： ",
    es: "🧰 Política： ",
    pt: "🧰 Política： ",
    ru: "🧰 Внутренняя политика： "
  },
  index_territory: {
    zh: "🗺 領土控制： ",
    en: "🗺 Territory： ",
    ja: "🗺 領土： ",
    ko: "🗺 영토： ",
    es: "🗺 Territorio： ",
    pt: "🗺 Território： ",
    ru: "🗺 Территория： "
  },
  index_research: {
    zh: "🧪 科技研究： ",
    en: "🧪 Research： ",
    ja: "🧪 研究： ",
    ko: "🧪 연구： ",
    es: "🧪 Investigación： ",
    pt: "🧪 Pesquisa： ",
    ru: "🧪 Исследования： "
  },
  index_warfare: {
    zh: "⚔ 戰爭部隊： ",
    en: "⚔ Army： ",
    ja: "⚔ 戦闘： ",
    ko: "⚔ 군대： ",
    es: "⚔ Ejército： ",
    pt: "⚔ Exército： ",
    ru: "⚔ Армия： "
  },
  index_generals: {
    zh: "🎖 將領經驗： ",
    en: "🎖 Generals： ",
    ja: "🎖 将軍： ",
    ko: "🎖 장군： ",
    es: "🎖 Generales： ",
    pt: "🎖 Generais： ",
    ru: "🎖 Генералы： "
  },
  index_resources: {
    zh: "🛢 資源能源： ",
    en: "🛢 Resources： ",
    ja: "🛢 資源： ",
    ko: "🛢 자원： ",
    es: "🛢 Recursos： ",
    pt: "🛢 Recursos： ",
    ru: "🛢 Ресурсы： "
  },
  index_spies: {
    zh: "🕵️ 間諜特工： ",
    en: "🕵️ Spies： ",
    ja: "🕵️ 諜報： ",
    ko: "🕵️ 첩보： ",
    es: "🕵️ Espías： ",
    pt: "🕵️ Espiões： ",
    ru: "🕵️ Шпионы： "
  },
  index_hidden: {
    zh: "💥 隱藏指令： ",
    en: "💥 Hidden： ",
    ja: "💥 隠しコマンド： ",
    ko: "💥 숨겨진 명령어： ",
    es: "💥 Secretos： ",
    pt: "💥 Ocultos： ",
    ru: "💥 Секретные： "
  },
  index_industry: {
    zh: "🏭 工業設計： ",
    en: "🏭 Industry： ",
    ja: "🏭 産業： ",
    ko: "🏭 산업： ",
    es: "🏭 Industria： ",
    pt: "🏭 Indústria： ",
    ru: "🏭 Промышленность： "
  },
  index_equipment: {
    zh: "🛠️ 裝備項目： ",
    en: "🛠️ Equipment: ",
    ja: "🛠️ 装備： ",
    ko: "🛠️ 장비: ",
    es: "🛠️ Equipamiento: ",
    pt: "🛠️ Equipamento: ",
    ru: "🛠️ Снаряжение: "
  },
  index_debug: {
    zh: "🧩 模組擴充指令： ",
    en: "🧩 Mod Commands： ",
    ja: "🧩 Mod コマンド： ",
    ko: "🧩 모드 명령어： ",
    es: "🧩 Comandos de Mod： ",
    pt: "🧩 Comandos de Mod： ",
    ru: "🧩 Команды модов： "
  },
  
  // 指令說明
  desc_allowtraits: {
    zh: "允許將領自由分配特質（重複但補上說明）",
    en: "Allows free assignment of general traits",
    ja: "将軍に自由に特性を割り当て可能（説明を追加）",
    ko: "장군 특성 자유 배정 허용",
    es: "Permite asignar libremente los rasgos de los generales",
    pt: "Permite atribuir livremente os traços dos generais",
    ru: "Позволяет свободно назначать черты генералам"
  },
  desc_manpower: {
    zh: "增加 10M 人力（可視需要與現有項目合併）",
    en: "Add 10M manpower",
    ja: "人的資源を 1000 万増加（他の項目と併用可能）",
    ko: "1천만 병력 추가",
    es: "Agregar 10 millones de mano de obra",
    pt: "Adicionar 10 milhões de mão de obra",
    ru: "Добавить 10 миллионов людских ресурсов"
  },
  desc_instant_wargoal: {
    zh: "瞬間完成正當化",
    en: "Instantly justify war goal",
    ja: "正当化即時完了",
    ko: "전쟁 명분 즉시 정당화",
    es: "Justificar objetivo de guerra al instante",
    pt: "Justificar objetivo de guerra instantaneamente",
    ru: "Мгновенное оправдание цели войны"
  },
  desc_allowdiplo: {
    zh: "無條件外交，可直接宣戰",
    en: "Unrestricted diplomacy, allows war declarations",
    ja: "外交制限解除、即時宣戦可能",
    ko: "외교 제한 해제, 즉시 선전포고 가능",
    es: "Diplomacia sin restricciones, permite declarar la guerra",
    pt: "Diplomacia irrestrita, permite declarar guerra",
    ru: "Без ограничений на дипломатию, позволяет объявлять войны"
  },
  desc_yesman: {
    zh: "AI 接受所有外交提案",
    en: "AI accepts all diplomatic actions",
    ja: "AI が全ての提案を承認",
    ko: "AI가 모든 외교 제안을 수락함",
    es: "La IA acepta todas las propuestas diplomáticas",
    pt: "IA aceita todas as propostas diplomáticas",
    ru: "ИИ принимает все дипломатические предложения"
  },
  desc_tp: {
    zh: "部隊瞬移（teleport 的簡寫）",
    en: "Instant troop teleport (short for teleport)",
    ja: "部隊瞬間移動（teleport の略）",
    ko: "부대 즉시 이동 (teleport의 약자)",
    es: "Teletransporte instantáneo de tropas (abreviatura de teleport)",
    pt: "Teleporte instantâneo de tropas (abreviação de teleport)",
    ru: "Мгновенное перемещение войск (сокращение от teleport)"
  },
  desc_ic: {
    zh: "瞬間建造（等同於 instantconstruction）",
    en: "Instant construction (equivalent to instantconstruction)",
    ja: "即時建設（= instantconstruction）",
    ko: "즉시 건설 (instantconstruction과 동일)",
    es: "Construcción instantánea (igual a instantconstruction)",
    pt: "Construção instantânea (equivalente a instantconstruction)",
    ru: "Мгновенное строительство (эквивалент instantconstruction)"
  },
  desc_it: {
    zh: "瞬間訓練（等同於 instanttraining）",
    en: "Instant training (equivalent to instanttraining)",
    ja: "即時訓練（= instanttraining）",
    ko: "즉시 훈련 (instanttraining과 동일)",
    es: "Entrenamiento instantáneo (igual a instanttraining)",
    pt: "Treinamento instantâneo (equivalente a instanttraining)",
    ru: "Мгновенная подготовка (эквивалент instanttraining)"
  },
  desc_ff: {
    zh: "無視國策限制（等同於 focus.nochecks）",
    en: "Ignore national focus restrictions (focus.nochecks)",
    ja: "国家方針制限を無視（= focus.nochecks）",
    ko: "국가중점 제한 무시 (focus.nochecks와 동일)",
    es: "Ignorar restricciones de enfoque nacional (focus.nochecks)",
    pt: "Ignorar restrições de foco nacional (focus.nochecks)",
    ru: "Игнорировать ограничения на национальные фокусы (focus.nochecks)"
  },
  desc_roic: {
    zh: "點擊科技圖示即完成研究（等同於 research_on_icon_click）",
    en: "Complete research on icon click (research_on_icon_click)",
    ja: "技術アイコンをクリックで研究完了（= research_on_icon_click）",
    ko: "기술 아이콘 클릭으로 연구 완료 (research_on_icon_click)",
    es: "Completar investigación al hacer clic en el ícono (research_on_icon_click)",
    pt: "Concluir pesquisa ao clicar no ícone (research_on_icon_click)",
    ru: "Завершить исследование по нажатию на иконку (research_on_icon_click)"
  },
  desc_allowtraits: {
    zh: "允許將領自由分配特質（重複但補上說明）",
    en: "Allows free assignment of general traits",
    ja: "将軍に自由に特性を割り当て可能（説明を追加）",
    ko: "장군 특성 자유 배정 허용",
    es: "Permite asignar libremente los rasgos de los generales",
    pt: "Permite atribuir livremente os traços dos generais",
    ru: "Позволяет свободно назначать черты генералам"
  },
  desc_manpower: {
    zh: "增加 10M 人力（可視需要與現有項目合併）",
    en: "Add 10M manpower",
    ja: "人的資源を 1000 万増加（他の項目と併用可能）",
    ko: "1천만 병력 추가",
    es: "Agregar 10 millones de mano de obra",
    pt: "Adicionar 10 milhões de mão de obra",
    ru: "Добавить 10 миллионов людских ресурсов"
  },
  desc_instant_wargoal: {
    zh: "瞬間完成正當化",
    en: "Instantly justify war goal",
    ja: "正当化即時完了",
    ko: "전쟁 명분 즉시 정당화",
    es: "Justificar objetivo de guerra al instante",
    pt: "Justificar objetivo de guerra instantaneamente",
    ru: "Мгновенное оправдание цели войны"
  },
  desc_allowdiplo: {
    zh: "無條件外交，可直接宣戰",
    en: "Unrestricted diplomacy, allows war declarations",
    ja: "外交制限解除、即時宣戦可能",
    ko: "외교 제한 해제, 즉시 선전포고 가능",
    es: "Diplomacia sin restricciones, permite declarar la guerra",
    pt: "Diplomacia irrestrita, permite declarar guerra",
    ru: "Без ограничений на дипломатию, позволяет объявлять войны"
  },
  desc_yesman: {
    zh: "AI 接受所有外交提案",
    en: "AI accepts all diplomatic actions",
    ja: "AI が全ての提案を承認",
    ko: "AI가 모든 외교 제안을 수락함",
    es: "La IA acepta todas las propuestas diplomáticas",
    pt: "IA aceita todas as propostas diplomáticas",
    ru: "ИИ принимает все дипломатические предложения"
  },
  desc_tp: {
    zh: "部隊瞬移（teleport 的簡寫）",
    en: "Instant troop teleport (short for teleport)",
    ja: "部隊瞬間移動（teleport の略）",
    ko: "부대 즉시 이동 (teleport의 약자)",
    es: "Teletransporte instantáneo de tropas (abreviatura de teleport)",
    pt: "Teleporte instantâneo de tropas (abreviação de teleport)",
    ru: "Мгновенное перемещение войск (сокращение от teleport)"
  },
  desc_ic: {
    zh: "瞬間建造（等同於 instantconstruction）",
    en: "Instant construction (equivalent to instantconstruction)",
    ja: "即時建設（= instantconstruction）",
    ko: "즉시 건설 (instantconstruction과 동일)",
    es: "Construcción instantánea (igual a instantconstruction)",
    pt: "Construção instantânea (equivalente a instantconstruction)",
    ru: "Мгновенное строительство (эквивалент instantconstruction)"
  },
  desc_it: {
    zh: "瞬間訓練（等同於 instanttraining）",
    en: "Instant training (equivalent to instanttraining)",
    ja: "即時訓練（= instanttraining）",
    ko: "즉시 훈련 (instanttraining과 동일)",
    es: "Entrenamiento instantáneo (igual a instanttraining)",
    pt: "Treinamento instantâneo (equivalente a instanttraining)",
    ru: "Мгновенная подготовка (эквивалент instanttraining)"
  },
  desc_ff: {
    zh: "無視國策限制（等同於 focus.nochecks）",
    en: "Ignore national focus restrictions (focus.nochecks)",
    ja: "国家方針制限を無視（= focus.nochecks）",
    ko: "국가중점 제한 무시 (focus.nochecks와 동일)",
    es: "Ignorar restricciones de enfoque nacional (focus.nochecks)",
    pt: "Ignorar restrições de foco nacional (focus.nochecks)",
    ru: "Игнорировать ограничения на национальные фокусы (focus.nochecks)"
  },
  desc_roic: {
    zh: "點擊科技圖示即完成研究（等同於 research_on_icon_click）",
    en: "Complete research on icon click (research_on_icon_click)",
    ja: "技術アイコンをクリックで研究完了（= research_on_icon_click）",
    ko: "기술 아이콘 클릭으로 연구 완료 (research_on_icon_click)",
    es: "Completar investigación al hacer clic en el ícono (research_on_icon_click)",
    pt: "Concluir pesquisa ao clicar no ícone (research_on_icon_click)",
    ru: "Завершить исследование по нажатию на иконку (research_on_icon_click)"
  },
  desc_add_opinion: {
    zh: "提高或降低兩國間的好感度",
    en: "Improve or worsen opinion between two countries",
    ja: "2国間の好感度を上下",
    ko: "두 국가 간의 호감도 조정",
    es: "Aumentar o reducir la opinión entre dos países",
    pt: "Aumentar ou reduzir a opinião entre dois países",
    ru: "Улучшить или ухудшить мнение между двумя странами"
  },
  desc_whitepeace: {
    zh: "雙方立即簽署白和平",
    en: "Instantly enforce white peace",
    ja: "即座に白紙和平を締結",
    ko: "양국 간 즉시 백색 평화 체결",
    es: "Imponer paz blanca al instante",
    pt: "Impor paz branca instantaneamente",
    ru: "Мгновенно заключить белый мир"
  },
  desc_observe: {
    zh: "進入觀察模式，AI 自動控制",
    en: "Enter observer mode (AI controls all nations)",
    ja: "観戦モードに入る（AIが全国家を制御）",
    ko: "관전자 모드 진입 (AI가 모든 국가 제어)",
    es: "Entrar en modo observador (IA controla todos los países)",
    pt: "Entrar no modo observador (IA controla todas as nações)",
    ru: "Режим наблюдателя (ИИ управляет всеми странами)"
  },
  desc_winwars: {
    zh: "立即贏得當前所有戰爭",
    en: "Win all ongoing wars instantly",
    ja: "進行中の全ての戦争に勝利",
    ko: "모든 진행 중인 전쟁 즉시 승리",
    es: "Ganar todas las guerras en curso al instante",
    pt: "Vencer todas as guerras em andamento instantaneamente",
    ru: "Выиграть все текущие войны"
  },
  desc_add_party_popularity: {
    zh: "調整政黨支持度（例：d、c、f、n）",
    en: "Adjust party popularity (e.g., d, c, f, n)",
    ja: "政党の支持率を調整（例：d、c、f、n）",
    ko: "정당 인기 조정 (예: d, c, f, n)",
    es: "Ajustar la popularidad del partido (por ejemplo: d, c, f, n)",
    pt: "Ajustar popularidade do partido (ex: d, c, f, n)",
    ru: "Изменить популярность партий (например: d, c, f, n)"
  },
  desc_set_ruling_party: {
    zh: "設定執政黨（例：fascism）",
    en: "Set ruling party (e.g., fascism)",
    ja: "与党を設定（例：fascism）",
    ko: "집권 정당 설정 (예: fascism)",
    es: "Establecer el partido gobernante (por ejemplo: fascism)",
    pt: "Definir o partido no poder (ex: fascism)",
    ru: "Назначить правящую партию (например: fascism)"
  },
  desc_tag_color: {
    zh: "更改目前國家顏色（如 tag_color 255 0 0）",
    en: "Change current country color (e.g., tag_color 255 0 0)",
    ja: "現在の国の色を変更（例：tag_color 255 0 0）",
    ko: "현재 국가 색상 변경 (예: tag_color 255 0 0)",
    es: "Cambiar el color del país actual (ej: tag_color 255 0 0)",
    pt: "Alterar cor do país atual (ex: tag_color 255 0 0)",
    ru: "Изменить цвет текущей страны (например: tag_color 255 0 0)"
  },
  desc_instantconstruction: {
    zh: "建築立即完成",
    en: "Instantly complete building construction",
    ja: "建設を即時完了",
    ko: "건물 즉시 건설 완료",
    es: "Construcción instantánea de edificios",
    pt: "Construção de edifícios instantânea",
    ru: "Мгновенное завершение строительства зданий"
  },
  desc_focus_autocomplete: {
    zh: "立刻完成國家方針",
    en: "Instantly complete national focus",
    ja: "国家方針を即時完了",
    ko: "국가중점 즉시 완료",
    es: "Completar enfoque nacional al instante",
    pt: "Completar foco nacional instantaneamente",
    ru: "Мгновенно завершить национальный фокус"
  },
  desc_focus_nochecks: {
    zh: "忽略國策前置條件",
    en: "Ignore prerequisites for national focuses",
    ja: "国家方針の前提条件を無視",
    ko: "국가중점 전제조건 무시",
    es: "Ignorar requisitos previos para enfoques nacionales",
    pt: "Ignorar pré-requisitos de focos nacionais",
    ru: "Игнорировать условия для национальных фокусов"
  },
  desc_decision_nochecks: {
    zh: "忽略決議條件",
    en: "Ignore conditions for decisions",
    ja: "決定の条件を無視",
    ko: "결정 조건 무시",
    es: "Ignorar condiciones para decisiones",
    pt: "Ignorar condições para decisões",
    ru: "Игнорировать условия для решений"
  },
  desc_cp: {
    zh: "+100 指揮點",
    en: "+100 command power",
    ja: "指揮力 +100",
    ko: "지휘력 +100",
    es: "+100 poder de mando",
    pt: "+100 de poder de comando",
    ru: "+100 очков командования"
  },
  desc_ws: {
    zh: "設定戰爭支持度",
    en: "Set war support",
    ja: "戦争支持率を設定",
    ko: "전쟁 지지도 설정",
    es: "Establecer apoyo a la guerra",
    pt: "Definir apoio à guerra",
    ru: "Установить поддержку войны"
  },
  desc_st: {
    zh: "設定穩定度",
    en: "Set stability",
    ja: "安定度を設定",
    ko: "안정도 설정",
    es: "Establecer estabilidad",
    pt: "Definir estabilidade",
    ru: "Установить стабильность"
  },
  desc_xp: {
    zh: "+500 陸海空經驗",
    en: "+500 army, navy, and air experience",
    ja: "陸海空の経験値 +500",
    ko: "육해공 경험치 +500",
    es: "+500 de experiencia en tierra, mar y aire",
    pt: "+500 de experiência terrestre, naval e aérea",
    ru: "+500 опыта армии, флота и авиации"
  },
  desc_pp: {
    zh: "+政治點數",
    en: "+ political power",
    ja: "政治力 +",
    ko: "정치력 +",
    es: "+ poder político",
    pt: "+ poder político",
    ru: "+ политическая власть"
  },
  desc_threat: {
    zh: "增加世界緊張度",
    en: "Increase world tension",
    ja: "世界の緊張度を上昇",
    ko: "세계 긴장도 증가",
    es: "Aumentar la tensión mundial",
    pt: "Aumentar a tensão mundial",
    ru: "Увеличить мировую напряжённость"
  },
  desc_focus_ignore: {
    zh: "無視是否完成前置國策",
    en: "Ignore completion of prerequisite focuses",
    ja: "前提国家方針の完了を無視",
    ko: "전제 국가중점 완료 여부 무시",
    es: "Ignorar el cumplimiento de enfoques previos",
    pt: "Ignorar conclusão de pré-requisitos de foco",
    ru: "Игнорировать завершение предыдущих фокусов"
  },
  desc_civilwar: {
    zh: "發動指定國家內戰",
    en: "Trigger civil war in specified country",
    ja: "指定国で内戦を勃発させる",
    ko: "지정 국가에서 내전 발생",
    es: "Desencadenar guerra civil en el país especificado",
    pt: "Iniciar guerra civil no país especificado",
    ru: "Начать гражданскую войну в указанной стране"
  },
  desc_tdebug: {
    zh: "顯示國家、省份、事件、裝備等 ID（啟用/關閉切換）",
    en: "Show country, province, event, equipment IDs (toggle on/off)",
    ja: "国家・州・イベント・装備の ID を表示（オン/オフ切替）",
    ko: "국가, 주, 이벤트, 장비 ID 표시 (토글)",
    es: "Mostrar ID de país, provincia, evento y equipo (activar/desactivar)",
    pt: "Mostrar IDs de país, província, evento e equipamento (alternar)",
    ru: "Показать ID стран, провинций, событий и снаряжения (вкл/выкл)"
  },
  desc_tag: {
    zh: "切換控制國家",
    en: "Switch the controlled country",
    ja: "操作国を切り替える",
    ko: "조종 국가 변경",
    es: "Cambiar el país controlado",
    pt: "Mudar país controlado",
    ru: "Переключить управляемую страну"
  },
  desc_add_core: {
    zh: "增加核心領土",
    en: "Add core territory",
    ja: "中核州を追加",
    ko: "핵심 영토 추가",
    es: "Agregar territorio central",
    pt: "Adicionar território central",
    ru: "Добавить национальную территорию"
  },
  desc_annex: {
    zh: "吞併國家",
    en: "Annex a country",
    ja: "国を併合",
    ko: "국가 병합",
    es: "Anexar país",
    pt: "Anexar país",
    ru: "Аннексировать страну"
  },
  desc_delall: {
    zh: "刪除國家所有軍隊",
    en: "Delete all armies of a country",
    ja: "国の全軍を削除",
    ko: "국가의 모든 군대 삭제",
    es: "Eliminar todos los ejércitos del país",
    pt: "Excluir todos os exércitos do país",
    ru: "Удалить все армии страны"
  },
  desc_setowner: {
    zh: "設為該國擁有",
    en: "Set as owned by specified country",
    ja: "指定国の所有に設定",
    ko: "지정 국가의 소유로 설정",
    es: "Establecer como propiedad del país especificado",
    pt: "Definir como posse do país especificado",
    ru: "Назначить территорией указанной страны"
  },
  desc_setcontroller: {
    zh: "設為該國控制",
    en: "Set as controlled by specified country",
    ja: "指定国の支配下に設定",
    ko: "지정 국가의 통제로 설정",
    es: "Establecer como controlado por el país especificado",
    pt: "Definir como controlado pelo país especificado",
    ru: "Установить контроль указанной страны"
  },
  desc_research_complete: {
    zh: "完成第一欄研究",
    en: "Complete first column research",
    ja: "最初の列の研究を完了",
    ko: "첫 번째 열의 연구 완료",
    es: "Completar la investigación de la primera columna",
    pt: "Concluir a primeira pesquisa da coluna",
    ru: "Завершить исследование первого столбца"
  },
  desc_research_all: {
    zh: "完成所有研究",
    en: "Complete all research",
    ja: "全ての研究を完了",
    ko: "모든 연구 완료",
    es: "Completar toda la investigación",
    pt: "Concluir todas as pesquisas",
    ru: "Завершить все исследования"
  },
  desc_research_on_icon_click: {
    zh: "點擊完成科技",
    en: "Click to complete technology",
    ja: "クリックで研究完了",
    ko: "클릭하여 기술 완료",
    es: "Clic para completar tecnología",
    pt: "Clique para concluir a tecnologia",
    ru: "Щелкните, чтобы завершить исследование"
  },
  desc_teleport: {
    zh: "將選定部隊瞬間移動到指定省份",
    en: "Instantly move selected units to target province",
    ja: "選択した部隊を指定した州に瞬時に移動",
    ko: "선택한 부대를 지정한 지역으로 즉시 이동",
    es: "Mover instantáneamente unidades seleccionadas a la provincia objetivo",
    pt: "Mover instantaneamente unidades selecionadas para a província de destino",
    ru: "Мгновенно переместить выбранные части в указанную провинцию"
  },
  desc_spawn: {
    zh: "在指定地點生成部隊（需啟用 -debug）",
    en: "Spawn unit at location (requires -debug enabled)",
    ja: "指定場所にユニットを生成（-debug 有効時）",
    ko: "지정 위치에 부대 생성 (-debug 필요)",
    es: "Generar unidad en ubicación (requiere -debug activado)",
    pt: "Gerar unidade na localização (necessário -debug ativado)",
    ru: "Создать войска в указанной точке (требуется -debug)"
  },
  desc_deleteallunits: {
    zh: "刪除指定國所有軍隊",
    en: "Delete all units of a specified country",
    ja: "指定国の全軍を削除",
    ko: "지정 국가의 모든 부대 삭제",
    es: "Eliminar todas las unidades del país especificado",
    pt: "Excluir todas as unidades do país especificado",
    ru: "Удалить все войска указанной страны"
  },
  desc_moveunit: {
    zh: "將特定單位移動至省份",
    en: "Move specific unit to province",
    ja: "特定ユニットを州へ移動",
    ko: "특정 부대를 지방으로 이동",
    es: "Mover unidad específica a provincia",
    pt: "Mover unidade específica para província",
    ru: "Переместить конкретное подразделение в провинцию"
  },
  desc_instant_wargoal: {
    zh: "立刻完成正當化",
    en: "Instantly justify war goal",
    ja: "即座に正当化完了",
    ko: "즉시 전쟁 명분 정당화",
    es: "Justificar objetivo de guerra instantáneamente",
    pt: "Justificar objetivo de guerra instantaneamente",
    ru: "Мгновенно обосновать цель войны"
  },
  desc_instanttraining: {
    zh: "部隊立即訓練完成",
    en: "Instantly complete training",
    ja: "即座に訓練完了",
    ko: "즉시 훈련 완료",
    es: "Entrenamiento instantáneo",
    pt: "Concluir treinamento instantaneamente",
    ru: "Мгновенное завершение тренировки"
  },
  desc_instant_prepare: {
    zh: "海軍入侵立即準備",
    en: "Naval invasion preparation instant",
    ja: "海軍侵攻の準備即時完了",
    ko: "해군 침공 즉시 준비 완료",
    es: "Preparación de invasión naval instantánea",
    pt: "Preparação de invasão naval instantânea",
    ru: "Мгновенная подготовка морского вторжения"
  },
  desc_show_enemy_ships: {
    zh: "顯示敵方艦隊",
    en: "Show enemy fleets",
    ja: "敵艦隊を表示",
    ko: "적 함대 표시",
    es: "Mostrar flotas enemigas",
    pt: "Mostrar frotas inimigas",
    ru: "Показать вражеские флоты"
  },
  desc_bypass_invasion: {
    zh: "無視制海權",
    en: "Bypass naval superiority check",
    ja: "制海権チェックを無視",
    ko: "제해권 무시",
    es: "Omitir verificación de superioridad naval",
    pt: "Ignorar verificação de superioridade naval",
    ru: "Игнорировать проверку морского превосходства"
  },
  desc_fow: {
    zh: "去除戰爭迷霧，顯示敵方部隊",
    en: "Remove fog of war, show enemy troops",
    ja: "戦争の霧を除去して敵部隊を表示",
    ko: "전장의 안개 제거 및 적 부대 표시",
    es: "Eliminar niebla de guerra y mostrar tropas enemigas",
    pt: "Remover névoa de guerra e mostrar tropas inimigas",
    ru: "Удалить туман войны и показать войска противника"
  },
  desc_allowtraits: {
    zh: "解鎖全部將領特質",
    en: "Unlock all general traits",
    ja: "将軍特性をすべて解除",
    ko: "장군 특성 전부 해제",
    es: "Desbloquear todos los rasgos de generales",
    pt: "Desbloquear todos os traços dos generais",
    ru: "Разблокировать все черты генералов"
  },
  desc_gain_xp: {
    zh: "增加將領經驗",
    en: "Gain general experience",
    ja: "将軍の経験値を増やす",
    ko: "장군 경험치 획득",
    es: "Ganar experiencia de general",
    pt: "Ganhar experiência de general",
    ru: "Получить опыт генерала"
  },
  desc_add_latest_equipment: {
    zh: "為所有已研發裝備新增指定數量",
    en: "Add specified amount of all researched equipment",
    ja: "すべての研究済み装備を指定数追加",
    ko: "연구된 장비를 지정된 수량만큼 추가",
    es: "Agregar cantidad especificada de todos los equipos investigados",
    pt: "Adicionar quantidade especificada de todos os equipamentos pesquisados",
    ru: "Добавить указанное количество всего изученного снаряжения"
  },
  desc_fuel: {
    zh: "增加燃料",
    en: "Add fuel",
    ja: "燃料を追加",
    ko: "연료 추가",
    es: "Agregar combustible",
    pt: "Adicionar combustível",
    ru: "Добавить топливо"
  },
  desc_nukes: {
    zh: "增加核彈",
    en: "Add nukes",
    ja: "核兵器を追加",
    ko: "핵무기 추가",
    es: "Agregar armas nucleares",
    pt: "Adicionar bombas nucleares",
    ru: "Добавить ядерные бомбы"
  },
  desc_debug_nuking: {
    zh: "可用核彈無限制",
    en: "Unlimited nukes enabled",
    ja: "核兵器無制限使用",
    ko: "핵무기 무제한 사용 가능",
    es: "Habilitar armas nucleares ilimitadas",
    pt: "Permitir uso ilimitado de armas nucleares",
    ru: "Неограниченное использование ядерного оружия"
  },
  desc_add_mines: {
    zh: "最大化水雷",
    en: "Max out naval mines",
    ja: "海上機雷を最大にする",
    ko: "해상 기뢰 최대화",
    es: "Maximizar minas navales",
    pt: "Maximizar minas navais",
    ru: "Максимизировать морские мины"
  },
  desc_ale: {
    zh: "一次性獲得各類最高級裝備（不含艦船）",
    en: "Gain all top-tier equipment at once (excluding ships)",
    ja: "全種最高レベルの装備を一括取得（艦船除く）",
    ko: "모든 최고급 장비 즉시 획득 (함선 제외)",
    es: "Obtener todo el equipamiento de nivel máximo a la vez (sin barcos)",
    pt: "Obter todos os equipamentos de alto nível de uma vez (exceto navios)",
    ru: "Получить все высокоуровневое снаряжение сразу (без кораблей)"
  },
  desc_agency_instantslotunlock: {
    zh: "立即解鎖特工槽",
    en: "Instantly unlock operative slot",
    ja: "諜報員スロットを即時解除",
    ko: "첩보원 슬롯 즉시 해제",
    es: "Desbloquear espacio de agente al instante",
    pt: "Desbloquear espaço de agente instantaneamente",
    ru: "Мгновенно разблокировать слот агента"
  },
  desc_agency_autocomplete: {
    zh: "立即完成升級",
    en: "Instantly complete upgrade",
    ja: "アップグレードを即座に完了",
    ko: "업그레이드 즉시 완료",
    es: "Completar mejora al instante",
    pt: "Concluir atualização instantaneamente",
    ru: "Мгновенно завершить улучшение"
  },
  desc_agency_instant: {
    zh: "即刻完成行動",
    en: "Instantly complete mission",
    ja: "任務即時完了",
    ko: "작전 즉시 완료",
    es: "Completar misión al instante",
    pt: "Concluir missão instantaneamente",
    ru: "Мгновенно завершить операцию"
  },
  desc_operation_instant: {
    zh: "秒完成任務",
    en: "Complete operation in seconds",
    ja: "作戦を数秒で完了",
    ko: "작전 몇 초 내 완료",
    es: "Completar operación en segundos",
    pt: "Concluir operação em segundos",
    ru: "Завершить операцию за секунды"
  },
  desc_prevent_operative_detection: {
    zh: "不被發現",
    en: "Prevent operative detection",
    ja: "諜報員が発見されない",
    ko: "첩보원 탐지 방지",
    es: "Evitar detección del agente",
    pt: "Evitar detecção do agente",
    ru: "Предотвратить обнаружение агента"
  },
  desc_resistance: {
    zh: "提高抵抗度",
    en: "Increase resistance",
    ja: "レジスタンスを上げる",
    ko: "저항도 증가",
    es: "Aumentar resistencia",
    pt: "Aumentar resistência",
    ru: "Увеличить сопротивление"
  },
  desc_compliance: {
    zh: "提高順從度",
    en: "Increase compliance",
    ja: "順応度を上げる",
    ko: "순응도 증가",
    es: "Aumentar cumplimiento",
    pt: "Aumentar conformidade",
    ru: "Увеличить подчинение"
  },
  desc_armageddon: {
    zh: "全球核爆",
    en: "Global nuclear detonation",
    ja: "全世界に核爆弾を投下",
    ko: "전 세계 핵폭발",
    es: "Detonación nuclear global",
    pt: "Detonação nuclear global",
    ru: "Глобальный ядерный взрыв"
  },
  desc_decision_fastremove: {
    zh: "決議只需一天",
    en: "Decisions require only one day",
    ja: "決議は1日で完了",
    ko: "결정 하루 만에 완료",
    es: "Las decisiones toman solo un día",
    pt: "Decisões levam apenas um dia",
    ru: "Решения занимают всего один день"
  },
  desc_sp_unlock_all: {
    zh: "解鎖所有特殊項目",
    en: "Unlock all special projects",
    ja: "全ての特殊プロジェクトを解除",
    ko: "모든 특수 프로젝트 잠금 해제",
    es: "Desbloquear todos los proyectos especiales",
    pt: "Desbloquear todos os projetos especiais",
    ru: "Разблокировать все специальные проекты"
  },
  desc_sp_research_all: {
    zh: "研究所有特殊項目",
    en: "Research all special projects",
    ja: "全ての特殊プロジェクトを研究",
    ko: "모든 특수 프로젝트 연구",
    es: "Investigar todos los proyectos especiales",
    pt: "Pesquisar todos os projetos especiais",
    ru: "Исследовать все специальные проекты"
  },
  desc_sp_add_mastermind: {
    zh: "加入頂尖科學家",
    en: "Add top scientist",
    ja: "トップ科学者を追加",
    ko: "최고 과학자 추가",
    es: "Agregar científico destacado",
    pt: "Adicionar cientista de ponta",
    ru: "Добавить ведущего учёного"
  },
  desc_sp_breakthrough: {
    zh: "增加突破點",
    en: "Add breakthrough points",
    ja: "ブレイクスルーポイントを追加",
    ko: "돌파 포인트 추가",
    es: "Agregar puntos de avance",
    pt: "Adicionar pontos de avanço",
    ru: "Добавить очки прорыва"
  },
  desc_sp_available: {
    zh: "強制可用特殊項目",
    en: "Force unlock special projects",
    ja: "特殊プロジェクトを強制的に有効化",
    ko: "특수 프로젝트 강제 해제",
    es: "Forzar desbloqueo de proyectos especiales",
    pt: "Forçar desbloqueio de projetos especiais",
    ru: "Принудительно открыть специальные проекты"
  },
  desc_building_health: {
    zh: "修改建築耐久度",
    en: "Modify building health",
    ja: "建物の耐久度を変更",
    ko: "건물 내구도 변경",
    es: "Modificar resistencia de edificio",
    pt: "Modificar durabilidade de construção",
    ru: "Изменить прочность зданий"
  },
  desc_add_ideas: {
    zh: "加入指定國策或民族精神",
    en: "Add specific national focus or spirit",
    ja: "特定の国家方針や精神を追加",
    ko: "지정한 국가 중점 또는 정신 추가",
    es: "Agregar enfoque o espíritu nacional específico",
    pt: "Adicionar foco nacional ou espírito específico",
    ru: "Добавить указанный национальный фокус или дух"
  },
  desc_addfunds_80k: {
    zh: "+8萬設計商資金",
    en: "+80k design company funds",
    ja: "設計会社資金を80,000追加",
    ko: "설계 회사 자금 80,000 추가",
    es: "+80 mil fondos de diseñador",
    pt: "+80 mil de fundos para designer",
    ru: "+80 тыс. средств для проектных компаний"
  },
  desc_addfunds_800k: {
    zh: "+80萬設計商資金",
    en: "+800k design company funds",
    ja: "設計会社資金を800,000追加",
    ko: "설계 회사 자금 800,000 추가",
    es: "+800 mil fondos de diseñador",
    pt: "+800 mil de fundos para designer",
    ru: "+800 тыс. средств для проектных компаний"
  },
  desc_spawn_dev: {
    zh: "模組開發常用，快速生成單位以測試平衡性或效果",
    en: "Commonly used in mod development to spawn units for balance or effect testing",
    ja: "MOD開発でよく使われる。バランスや効果をテストするためにユニットを生成",
    ko: "모드 개발에 자주 사용되며, 밸런스 또는 효과 테스트용 유닛 생성",
    es: "Común en desarrollo de mods para generar unidades y probar balance o efectos",
    pt: "Usado em desenvolvimento de mods para gerar unidades e testar balanceamento ou efeitos",
    ru: "Часто используется при разработке модов для создания юнитов и тестирования баланса или эффектов"
  },
  desc_reloadtech: {
    zh: "修改科技檔後套用（不需重啟）",
    en: "Apply changes to technology files without restarting",
    ja: "技術ファイルの変更を再起動せずに適用",
    ko: "기술 파일 수정 후 재시작 없이 적용",
    es: "Aplicar cambios a los archivos tecnológicos sin reiniciar",
    pt: "Aplicar mudanças nos arquivos de tecnologia sem reiniciar",
    ru: "Применить изменения в файлах технологий без перезапуска"
  },
  desc_debug_terrain: {
    zh: "觀察地形錯誤或地圖開發時使用",
    en: "Used for observing terrain errors or during map development",
    ja: "地形のエラー確認やマップ作成時に使用",
    ko: "지형 오류 확인 또는 지도 개발 시 사용",
    es: "Para observar errores de terreno o en el desarrollo del mapa",
    pt: "Usado para observar erros de terreno ou durante desenvolvimento de mapas",
    ru: "Используется для наблюдения ошибок рельефа или при разработке карты"
  },
  desc_reloadinterface: {
    zh: "修改 UI 檔後重新載入",
    en: "Reload UI after modifications",
    ja: "UIファイルを変更後、再読み込み",
    ko: "UI 파일 수정 후 다시 불러오기",
    es: "Recargar interfaz de usuario tras cambios",
    pt: "Recarregar a interface de usuário após modificações",
    ru: "Перезагрузить UI после изменений"
  },
  desc_tdebug_dev: {
    zh: "取得 province/state ID，用於 add_core、goto_province 等",
    en: "Get province/state ID, used with add_core, goto_province, etc.",
    ja: "州/地域IDを取得し、add_coreやgoto_provinceで使用",
    ko: "province/state ID를 확인하고 add_core, goto_province 등에 사용",
    es: "Obtener ID de provincia/estado para usar con add_core, goto_province, etc.",
    pt: "Obter ID de província/estado para uso com add_core, goto_province, etc.",
    ru: "Получить ID провинции/штата для использования с add_core, goto_province и т.д."
  },
  desc_debug_nogui: {
    zh: "拍攝純地圖用，關閉所有 UI",
    en: "For clean map screenshots, disables all UI",
    ja: "地図のみを撮影するため、UIをすべて非表示に",
    ko: "순수 지도 촬영용으로 모든 UI 비활성화",
    es: "Captura de mapa limpia sin interfaz",
    pt: "Para capturas do mapa limpas, desativa toda a UI",
    ru: "Для чистых скриншотов карты отключает весь UI"
  },
  desc_reloadweather: {
    zh: "測試天氣系統模組時使用",
    en: "Used to test weather system mods",
    ja: "天候システムMODのテストに使用",
    ko: "날씨 시스템 모드 테스트에 사용",
    es: "Para probar mods del sistema climático",
    pt: "Usado para testar mods de clima",
    ru: "Используется для тестирования погодных модов"
  },
  desc_debug_borders: {
    zh: "確認國界顯示是否正確",
    en: "Check if national borders render correctly",
    ja: "国境の表示が正しいかを確認",
    ko: "국경 표시가 정확한지 확인",
    es: "Verificar si las fronteras se muestran correctamente",
    pt: "Verificar se as fronteiras estão sendo exibidas corretamente",
    ru: "Проверить правильность отображения границ"
  },
  desc_fascism: {
    zh: "法西斯主義（法西斯）",
    en: "Fascism",
    ja: "ファシズム",
    ko: "파시즘",
    es: "Fascismo",
    pt: "Fascismo",
    ru: "Фашизм"
  },
  desc_communism: {
    zh: "共產主義（共產）",
    en: "Communism",
    ja: "共産主義",
    ko: "공산주의",
    es: "Comunismo",
    pt: "Comunismo",
    ru: "Коммунизм"
  },
  desc_democratic: {
    zh: "民主主義（民主）",
    en: "Democratic",
    ja: "民主主義",
    ko: "민주주의",
    es: "Democrático",
    pt: "Democrático",
    ru: "Демократия"
  },
  desc_neutrality: {
    zh: "中立主義（非陣營/專制）",
    en: "Neutrality (unaligned/autocracy)",
    ja: "中立主義（非同盟/専制）",
    ko: "중립주의 (비동맹/전제주의)",
    es: "Neutralidad (no alineado/autocracia)",
    pt: "Neutralidade (não alinhado/autocrático)",
    ru: "Нейтралитет (неприсоед./автократия)"
  },
  desc_anarchism: {
    zh: "無政府主義",
    en: "Anarchism",
    ja: "アナーキズム",
    ko: "무정부주의",
    es: "Anarquismo",
    pt: "Anarquismo",
    ru: "Анархизм"
  },
  desc_despotism: {
    zh: "極端專制主義",
    en: "Despotism",
    ja: "専制主義",
    ko: "전제주의",
    es: "Despotismo",
    pt: "Despotismo",
    ru: "Деспотизм"
  },
  desc_radical_socialism: {
    zh: "激進社會主義",
    en: "Radical Socialism",
    ja: "急進的社会主義",
    ko: "급진 사회주의",
    es: "Socialismo radical",
    pt: "Socialismo radical",
    ru: "Радикальный социализм"
  },
  desc_social_liberalism: {
    zh: "社會自由主義",
    en: "Social Liberalism",
    ja: "社会自由主義",
    ko: "사회적 자유주의",
    es: "Liberalismo social",
    pt: "Liberalismo social",
    ru: "Социальный либерализм"
  },
  desc_monarchism: {
    zh: "君主制",
    en: "Monarchism",
    ja: "君主制",
    ko: "군주제",
    es: "Monarquismo",
    pt: "Monarquismo",
    ru: "Монархизм"
  },
  desc_technocracy: {
    zh: "技術官僚主義",
    en: "Technocracy",
    ja: "テクノクラシー",
    ko: "기술관료주의",
    es: "Tecnocracia",
    pt: "Tecnocracia",
    ru: "Технократия"
  },
  desc_theocracy: {
    zh: "神權統治",
    en: "Theocracy",
    ja: "神権政治",
    ko: "신정 정치",
    es: "Teocracia",
    pt: "Teocracia",
    ru: "Теократия"
  },
  desc_reactionism: {
    zh: "反動保守主義",
    en: "Reactionism",
    ja: "反動主義",
    ko: "반동주의",
    es: "Reaccionismo",
    pt: "Reacionarismo",
    ru: "Реакционизм"
  },
  //常用國家代碼
  tag_GER: { zh: "德國", en: "Germany", ja: "ドイツ", ko: "독일", es: "Alemania", pt: "Alemanha", ru: "Германия"},
  tag_SOV: { zh: "蘇聯", en: "Soviet Union", ja: "ソ連", ko: "소련", es: "Unión Soviética", pt: "União Soviética", ru: "Советский Союз" },
  tag_ENG: { zh: "英國", en: "United Kingdom", ja: "イギリス", ko: "영국", es: "Reino Unido", pt: "Reino Unido", ru: "Великобритания" },
  tag_USA: { zh: "美國", en: "United States", ja: "アメリカ", ko: "미국", es: "Estados Unidos", pt: "Estados Unidos", ru: "США" },
  tag_FRA: { zh: "法國", en: "France", ja: "フランス", ko: "프랑스", es: "Francia", pt: "França", ru: "Франция" },
  tag_ITA: { zh: "義大利", en: "Italy", ja: "イタリア", ko: "이탈리아", es: "Italia", pt: "Itália", ru: "Италия" },
  tag_JAP: { zh: "日本", en: "Japan", ja: "日本", ko: "일본", es: "Japón", pt: "Japão", ru: "Япония" },
  tag_CHI: { zh: "中華民國", en: "Republic of China", ja: "中華民国", ko: "중화민국", es: "República de China", pt: "República da China", ru: "Китайская Республика" },
  tag_PRC: { zh: "共產中國", en: "Communist China", ja: "共産中国", ko: "공산 중국", es: "China Comunista", pt: "China Comunista", ru: "Коммунистический Китай" },
  tag_RAJ: { zh: "印度", en: "India (Raj)", ja: "インド（ラージ）", ko: "인도 (라지)", es: "India (Raj)", pt: "Índia (Raj)", ru: "Индия (Британская Индия)" },
  tag_CAN: { zh: "加拿大", en: "Canada", ja: "カナダ", ko: "캐나다", es: "Canadá", pt: "Canadá", ru: "Канада" },
  tag_AUS: { zh: "澳洲", en: "Australia", ja: "オーストラリア", ko: "호주", es: "Australia", pt: "Austrália", ru: "Австралия" },
  tag_NZL: { zh: "紐西蘭", en: "New Zealand", ja: "ニュージーランド", ko: "뉴질랜드", es: "Nueva Zelanda", pt: "Nova Zelândia", ru: "Новая Зеландия" },
  tag_MEX: { zh: "墨西哥", en: "Mexico", ja: "メキシコ", ko: "멕시코", es: "México", pt: "México", ru: "Мексика" },
  tag_BRA: { zh: "巴西", en: "Brazil", ja: "ブラジル", ko: "브라질", es: "Brasil", pt: "Brasil", ru: "Бразилия" },
  tag_ARG: { zh: "阿根廷", en: "Argentina", ja: "アルゼンチン", ko: "아르헨티나", es: "Argentina", pt: "Argentina", ru: "Аргентина" },
  tag_SPA: { zh: "西班牙（國民軍）", en: "Spain (Nationalist)", ja: "スペイン（国粋派）", ko: "스페인 (국민파)", es: "España (Nacionalistas)", pt: "Espanha (Nacionalista)", ru: "Испания (Националисты)" },
  tag_SPR: { zh: "西班牙（共和軍）", en: "Spain (Republican)", ja: "スペイン（共和派）", ko: "스페인 (공화파)", es: "España (Republicanos)", pt: "Espanha (Republicana)", ru: "Испания (Республиканцы)" },
  tag_TUR: { zh: "土耳其", en: "Turkey", ja: "トルコ", ko: "터키", es: "Turquía", pt: "Turquia", ru: "Турция" },
  tag_HUN: { zh: "匈牙利", en: "Hungary", ja: "ハンガリー", ko: "헝가리", es: "Hungría", pt: "Hungria", ru: "Венгрия" },
  tag_ROM: { zh: "羅馬尼亞", en: "Romania", ja: "ルーマニア", ko: "루마니아", es: "Rumanía", pt: "Romênia", ru: "Румыния" },
  tag_BUL: { zh: "保加利亞", en: "Bulgaria", ja: "ブルガリア", ko: "불가리아", es: "Bulgaria", pt: "Bulgária", ru: "Болгария" },
  tag_GRE: { zh: "希臘", en: "Greece", ja: "ギリシャ", ko: "그리스", es: "Grecia", pt: "Grécia", ru: "Греция" },
  tag_YUG: { zh: "南斯拉夫", en: "Yugoslavia", ja: "ユーゴスラビア", ko: "유고슬라비아", es: "Yugoslavia", pt: "Iugoslávia", ru: "Югославия" },
  tag_HOL: { zh: "荷蘭", en: "Netherlands", ja: "オランダ", ko: "네덜란드", es: "Países Bajos", pt: "Países Baixos", ru: "Нидерланды" },
  tag_BEL: { zh: "比利時", en: "Belgium", ja: "ベルギー", ko: "벨기에", es: "Bélgica", pt: "Bélgica", ru: "Бельгия" },
  tag_LUX: { zh: "盧森堡", en: "Luxembourg", ja: "ルクセンブルク", ko: "룩셈부르크", es: "Luxemburgo", pt: "Luxemburgo", ru: "Люксембург" },
  tag_POL: { zh: "波蘭", en: "Poland", ja: "ポーランド", ko: "폴란드", es: "Polonia", pt: "Polônia", ru: "Польша" },
  tag_CZE: { zh: "捷克斯洛伐克", en: "Czechoslovakia", ja: "チェコスロバキア", ko: "체코슬로바키아", es: "Checoslovaquia", pt: "Checoslováquia", ru: "Чехословакия" },
  tag_DEN: { zh: "丹麥", en: "Denmark", ja: "デンマーク", ko: "덴마크", es: "Dinamarca", pt: "Dinamarca", ru: "Дания" },
  tag_SWE: { zh: "瑞典", en: "Sweden", ja: "スウェーデン", ko: "스웨덴", es: "Suecia", pt: "Suécia", ru: "Швеция" },
  tag_NOR: { zh: "挪威", en: "Norway", ja: "ノルウェー", ko: "노르웨이", es: "Noruega", pt: "Noruega", ru: "Норвегия" },
  tag_FIN: { zh: "芬蘭", en: "Finland", ja: "フィンランド", ko: "핀란드", es: "Finlandia", pt: "Finlândia", ru: "Финляндия" },
  tag_POR: { zh: "葡萄牙", en: "Portugal", ja: "ポルトガル", ko: "포르투갈", es: "Portugal", pt: "Portugal", ru: "Португалия" },
  tag_SWI: { zh: "瑞士", en: "Switzerland", ja: "スイス", ko: "스위스", es: "Suiza", pt: "Suíça", ru: "Швейцария" },

  //
  desc_tdebug_province: {
    zh: "tdebug 啟用後，滑鼠移到地圖上會顯示 state ID 與 province ID，可搭配 add_core、teleport、goto_province 使用",
    en: "When tdebug is enabled, hovering over the map shows state and province IDs. Can be used with add_core, teleport, goto_province.",
    ja: "tdebug を有効にすると、マップ上に州 ID とプロヴィンス ID が表示され、add_core、teleport、goto_province と併用できます。",
    ko: "tdebug를 활성화하면 지도에 state ID와 province ID가 표시됩니다. add_core, teleport, goto_province와 함께 사용할 수 있습니다.",
    es: "Cuando tdebug está activado, al pasar el cursor por el mapa se muestran los IDs de estado y provincia. Úsalo con add_core, teleport, goto_province.",
    pt: "Com tdebug ativado, os IDs do estado e da província serão exibidos ao passar o mouse sobre o mapa. Use com add_core, teleport, goto_province.",
    ru: "При включенном tdebug при наведении курсора на карту отображаются ID штатов и провинций. Используйте с add_core, teleport, goto_province."
  },  
  desc_goto_state: {
    zh: "鏡頭移動到指定州",
    en: "Move camera to specified state",
    ja: "指定された州へカメラ移動",
    ko: "지정한 주로 카메라 이동",
    es: "Mover cámara al estado especificado",
    pt: "Mover câmera para o estado especificado",
    ru: "Переместить камеру к указанному штату"
  },
  desc_goto_province: {
    zh: "鏡頭移動到指定省",
    en: "Move camera to specified province",
    ja: "指定されたプロヴィンスへカメラ移動",
    ko: "지정한 지방으로 카메라 이동",
    es: "Mover cámara a la provincia especificada",
    pt: "Mover câmera para a província especificada",
    ru: "Переместить камеру к указанной провинции"
  },
  desc_goto:{
    zh: "鏡頭移動到指定位置",
    en: "Move camera to specified location",
    ja: "指定された位置へカメラ移動",
    ko: "지정한 위치로 카메라 이동",
    es: "Mover cámara a la ubicación especificada",
    pt: "Mover câmera para a localização especificada",
    ru: "Переместить камеру в указанное место"
  },
  section_map_legend: {
    zh: "🧭 地圖指令圖例",
    en: "🧭 Map Command Legend",
    ja: "🧭 マップコマンド一覧",
    ko: "🧭 지도 명령어 범례",
    es: "🧭 Leyenda de comandos del mapa",
    pt: "🧭 Legenda de comandos do mapa",
    ru: "🧭 Легенда команд карты"
  },
  map_hint_title: {
    zh: "快捷指令提示：",
    en: "Quick command hints:",
    ja: "ショートカットコマンドヒント：",
    ko: "빠른 명령어 힌트:",
    es: "Consejos de comandos rápidos:",
    pt: "Dicas de comandos rápidos:",
    ru: "Подсказки по быстрым командам:"
  },
  desc_add_core: {
    zh: "為某州加入核心",
    en: "Add core to a state",
    ja: "州にコア追加",
    ko: "주에 핵심 지역 추가",
    es: "Añadir núcleo a un estado",
    pt: "Adicionar núcleo a um estado",
    ru: "Добавить ядро к штату"
  },
  desc_teleport: {
    zh: "部隊瞬移",
    en: "Instantly move selected unit",
    ja: "部隊を即時移動",
    ko: "부대를 즉시 이동",
    es: "Teletransportar unidad seleccionada",
    pt: "Teletransportar unidade selecionada",
    ru: "Мгновенное перемещение отряда"
  },
  desc_setowner: {
    zh: "設為指定國家擁有",
    en: "Set specified nation as owner",
    ja: "指定国を所有者に設定",
    ko: "지정된 국가를 소유자로 설정",
    es: "Establecer nación como propietaria",
    pt: "Definir país como proprietário",
    ru: "Назначить владельцем указанную страну"
  },
  desc_setcontroller: {
    zh: "設為指定國家控制",
    en: "Set specified nation as controller",
    ja: "指定国を支配者に設定",
    ko: "지정된 국가를 통제자로 설정",
    es: "Establecer nación como controladora",
    pt: "Definir país como controlador",
    ru: "Назначить контролирующей стороной"
  },
  desc_tdebug_legend: {
    zh: "顯示省州 ID，與地圖層切換搭配最佳",
    en: "Show province/state ID, best used with map overlays",
    ja: "州・プロヴィンス ID を表示、地図層と組み合わせて使用",
    ko: "지도 계층과 함께 사용 시 최적의 주/지방 ID 표시",
    es: "Mostrar ID de estado/provincia, útil con capas de mapa",
    pt: "Mostrar ID de estado/província, melhor com sobreposições de mapa",
    ru: "Показать ID штатов/провинций, удобно с наложениями карты"
  },

    // 📘 指令使用範例
    ex_infantry: {
      zh: "給自己增加 9999999 件步兵裝備 III",
      en: "Add 9,999,999 Infantry Equipment III",
      ja: "歩兵装備 III を 9999999 個追加",
      ko: "보병 장비 III 9999999개 추가",
      es: "Añadir 9,999,999 de equipo de infantería III",
      pt: "Adicionar 9.999.999 equipamentos de infantaria III",
      ru: "Добавить 9,999,999 единиц пехотного снаряжения III"
    },
    ex_research_all: {
      zh: "解鎖所有科技",
      en: "Unlock all research",
      ja: "全ての研究を解除",
      ko: "모든 기술 해금",
      es: "Desbloquear toda la investigación",
      pt: "Desbloquear todas as pesquisas",
      ru: "Разблокировать все технологии"
    },
    ex_civilwar: {
      zh: "使英國發生法西斯內戰",
      en: "Start fascist civil war in the UK",
      ja: "イギリスでファシスト内戦を起こす",
      ko: "영국에 파시스트 내전 발생",
      es: "Iniciar guerra civil fascista en Reino Unido",
      pt: "Iniciar guerra civil fascista no Reino Unido",
      ru: "Начать фашистскую гражданскую войну в Великобритании"
    },
    ex_annex: {
      zh: "吞併德國",
      en: "Annex Germany",
      ja: "ドイツ併合",
      ko: "독일 합병",
      es: "Anexar Alemania",
      pt: "Anexar a Alemanha",
      ru: "Аннексировать Германию"
    },
    ex_whitepeace: {
      zh: "英國與德國直接簽署白和平",
      en: "UK and Germany sign white peace",
      ja: "イギリスとドイツが即座に白紙和平",
      ko: "영국과 독일이 즉시 백지 평화 체결",
      es: "Reino Unido y Alemania firman paz blanca",
      pt: "Reino Unido e Alemanha assinam paz branca",
      ru: "Великобритания и Германия подписывают белый мир"
    },
    ex_tag: {
      zh: "切換控制國家為蘇聯",
      en: "Switch to control the Soviet Union",
      ja: "操作国をソ連に切り替え",
      ko: "소련으로 조종 국가 전환",
      es: "Cambiar control a la Unión Soviética",
      pt: "Mudar controle para União Soviética",
      ru: "Переключиться на управление СССР"
    },
    ex_focus: {
      zh: "開啟後將立即完成選取的任何一個國家方針",
      en: "With this enabled, any national focus completes instantly",
      ja: "これを有効にすると、どの国家方針も即時完了",
      ko: "활성화하면 모든 국가중점 즉시 완료",
      es: "Con esto habilitado, cualquier enfoque nacional se completa al instante",
      pt: "Com isto ativado, qualquer foco nacional é concluído instantaneamente",
      ru: "При включении любая национальная цель выполняется мгновенно"
    },
    ex_teleport: {
      zh: "將選中的部隊瞬間移動到省份 ID 為 123 的地方",
      en: "Teleport selected unit to province ID 123",
      ja: "選択中の部隊をプロヴィンス ID 123 へ瞬間移動",
      ko: "선택한 부대를 ID 123번 지방으로 순간이동",
      es: "Teletransportar unidad seleccionada a la provincia 123",
      pt: "Teletransportar unidade para a província de ID 123",
      ru: "Телепортировать выбранные войска в провинцию ID 123"
    },
  
    // 📑 指令分類索引
    index_politics_desc: {
      zh: "政治點數、國策、政黨、外交自由",
      en: "Political power, national focus, parties, diplomacy",
      ja: "政治力・国家方針・政党・外交",
      ko: "정치력, 국가중점, 정당, 외교",
      es: "Poder político, enfoque nacional, partidos, diplomacia",
      pt: "Poder político, foco nacional, partidos, diplomacia",
      ru: "Политическая власть, нац. фокус, партии, дипломатия"
    },
    index_territory_desc: {
      zh: "國家控制權、省份 ID、核心、佔領",
      en: "Territory control, province IDs, cores, occupation",
      ja: "領土管理・プロヴィンス ID・中核州・占領",
      ko: "영토 통제, 지방 ID, 핵심, 점령",
      es: "Control de territorio, IDs de provincias, núcleos, ocupación",
      pt: "Controle de território, IDs de província, núcleos, ocupação",
      ru: "Контроль территории, ID провинций, ядро, оккупация"
    },
    index_research_desc: {
      zh: "瞬間完成研究、強制解鎖裝備",
      en: "Complete research instantly, unlock equipment",
      ja: "研究完了、装備を強制解除",
      ko: "즉시 연구 완료, 장비 해금",
      es: "Completar investigación, desbloquear equipamiento",
      pt: "Concluir pesquisa, desbloquear equipamentos",
      ru: "Завершить исследование, открыть снаряжение"
    },
    index_warfare_desc: {
      zh: "瞬移、編制、訓練、正當化、海軍入侵",
      en: "Teleport, spawn, training, wargoal, naval invasion",
      ja: "瞬間移動・編成・訓練・正当化・上陸作戦",
      ko: "순간이동, 편성, 훈련, 정당화, 상륙",
      es: "Teletransporte, reclutar, entrenamiento, objetivo de guerra, invasión",
      pt: "Teleporte, recrutamento, treino, objetivo de guerra, invasão",
      ru: "Телепорт, призыв, тренировка, казус белли, десант"
    },
    index_generals_desc: {
      zh: "指揮官經驗、特質解除限制",
      en: "Commander XP, trait unlocks",
      ja: "司令官経験・特性解除",
      ko: "장군 경험치, 특성 해제",
      es: "Experiencia del comandante, desbloqueo de habilidades",
      pt: "Experiência do comandante, desbloquear traços",
      ru: "Опыт командира, разблокировка черт"
    },
    index_resources_desc: {
      zh: "人力、燃料、核彈、水雷、生產裝備",
      en: "Manpower, fuel, nukes, mines, equipment",
      ja: "人的資源・燃料・核兵器・機雷・装備",
      ko: "인력, 연료, 핵무기, 기뢰, 장비",
      es: "Mano de obra, combustible, bombas nucleares, minas, equipo",
      pt: "Mão de obra, combustível, ogivas nucleares, minas, equipamentos",
      ru: "Человеческие ресурсы, топливо, ядерное оружие, мины, снаряжение"
    },
    index_spies_desc: {
      zh: "情報網、間諜指令、順從度、抵抗度",
      en: "Intel network, spy commands, compliance, resistance",
      ja: "情報網・スパイ指令・従順度・抵抗度",
      ko: "첩보망, 스파이 명령어, 순응도, 저항도",
      es: "Red de inteligencia, comandos de espía, cumplimiento, resistencia",
      pt: "Rede de espionagem, comandos, complacência, resistência",
      ru: "Разведсеть, команды шпионов, подчинение, сопротивление"
    },
    index_hidden_desc: {
      zh: "世界核爆、debug、特殊功能指令",
      en: "World nuking, debug, hidden commands",
      ja: "世界核爆・デバッグ・隠しコマンド",
      ko: "세계 핵폭발, 디버그, 숨겨진 명령",
      es: "Bombardeo nuclear, debug, comandos secretos",
      pt: "Nuclear mundial, debug, comandos ocultos",
      ru: "Ядерный апокалипсис, отладка, скрытые команды"
    },
    index_industry_desc: {
      zh: "設計商資金、建築耐久、想法與 reload",
      en: "Design funds, building HP, ideas and reload",
      ja: "設計資金・建物耐久・思想・再読み込み",
      ko: "설계 자금, 건물 체력, 아이디어 및 리로드",
      es: "Fondos de diseño, resistencia de edificios, ideas y recarga",
      pt: "Fundos de design, durabilidade de edifícios, ideias e recarga",
      ru: "Средства на проектирование, прочность построек, идеи и перезагрузка"
    },
    index_equipment_desc: {
      zh: "分類裝備與生成指令（支援搜尋與分類）",
      en: "Equipment list with commands (filterable)",
      ja: "装備一覧とコマンド（フィルター可）",
      ko: "장비 목록 및 명령어 (필터 가능)",
      es: "Lista de equipamiento con comandos (filtrable)",
      pt: "Lista de equipamentos com comandos (filtrável)",
      ru: "Список снаряжения с командами (с фильтром)"
    },
    index_debug_desc: {
      zh: "需啟用才能使用的指令如 spawn、instant_prepare 等",
      en: "Requires debug mode for commands like spawn, instant_prepare",
      ja: "spawn や instant_prepare などは debug モードが必要",
      ko: "spawn, instant_prepare 등의 명령어는 debug 모드 필요",
      es: "Comandos como spawn o instant_prepare requieren modo debug",
      pt: "Comandos como spawn ou instant_prepare exigem modo debug",
      ru: "Команды вроде spawn и instant_prepare требуют режима debug"
    },
    // 🔢 裝備代碼速查表
  section_equipment_table: {
    zh: "🔢 裝備代碼速查表",
    en: "🔢 Equipment Code Reference",
    ja: "🔢 装備コード一覧",
    ko: "🔢 장비 코드 목록",
    es: "🔢 Referencia de códigos de equipamiento",
    pt: "🔢 Referência de códigos de equipamento",
    ru: "🔢 Справочник кодов снаряжения"
  },
  equipment_table_desc: {
    zh: "下列表格列出常見裝備及其控制台指令，可供查詢與複製：",
    en: "Below is a list of common equipment and their console commands for reference and copy.",
    ja: "以下はよく使われる装備とそのコマンドの一覧です。",
    ko: "아래는 일반적인 장비 및 콘솔 명령어 목록입니다.",
    es: "A continuación se enumeran los equipos comunes y sus comandos de consola.",
    pt: "Abaixo está uma lista de equipamentos comuns e seus comandos de console.",
    ru: "Ниже приведён список распространённого снаряжения и соответствующих команд."
  },
  equipment_filter: {
    zh: "分類篩選：",
    en: "Category Filter:",
    ja: "カテゴリフィルター：",
    ko: "분류 필터:",
    es: "Filtrar por categoría:",
    pt: "Filtro por categoria:",
    ru: "Фильтр по категории:"
  },
  filter_all: {
    zh: "全部",
    en: "All",
    ja: "すべて",
    ko: "전체",
    es: "Todo",
    pt: "Todos",
    ru: "Все"
  },
  filter_infantry: {
    zh: "步兵",
    en: "Infantry",
    ja: "歩兵",
    ko: "보병",
    es: "Infantería",
    pt: "Infantaria",
    ru: "Пехота"
  },
  filter_tank: {
    zh: "坦克",
    en: "Tank",
    ja: "戦車",
    ko: "전차",
    es: "Tanques",
    pt: "Tanques",
    ru: "Танки"
  },
  filter_plane: {
    zh: "飛機",
    en: "Aircraft",
    ja: "航空機",
    ko: "항공기",
    es: "Aviones",
    pt: "Aviões",
    ru: "Авиация"
  },
  filter_ship: {
    zh: "艦艇",
    en: "Naval",
    ja: "艦船",
    ko: "함선",
    es: "Buques",
    pt: "Navios",
    ru: "Флот"
  },
  filter_supply: {
    zh: "補給",
    en: "Logistics",
    ja: "補給",
    ko: "보급",
    es: "Suministros",
    pt: "Suprimentos",
    ru: "Снабжение"
  },
  table_category: {
    zh: "分類",
    en: "Category",
    ja: "カテゴリ",
    ko: "분류",
    es: "Categoría",
    pt: "Categoria",
    ru: "Категория"
  },
  table_name: {
    zh: "裝備名稱",
    en: "Equipment Name",
    ja: "装備名",
    ko: "장비 이름",
    es: "Nombre del equipo",
    pt: "Nome do equipamento",
    ru: "Название снаряжения"
  },
  table_command: {
    zh: "控制台指令",
    en: "Console Command",
    ja: "コンソールコマンド",
    ko: "콘솔 명령어",
    es: "Comando de consola",
    pt: "Comando de console",
    ru: "Команда консоли"
  },
  // 裝備名稱（示例）
  eqtype_infantry: { zh: "步兵", en: "Infantry", ja: "歩兵", ko: "보병", es: "Infantería", pt: "Infantaria", ru: "Пехота" },
  eqname_infantry_3: { zh: "步兵裝備 III", en: "Infantry Equipment III", ja: "歩兵装備 III", ko: "보병 장비 III", es: "Equipo de Infantería III", pt: "Equipamento de Infantaria III", ru: "Пехотное снаряжение III" },
  eqname_support: { zh: "支援裝備", en: "Support Equipment", ja: "支援装備", ko: "지원 장비", es: "Equipo de Apoyo", pt: "Equipamento de Suporte", ru: "Вспомогательное снаряжение" },
  eqname_artillery: { zh: "火砲 III", en: "Artillery III", ja: "砲兵 III", ko: "포병 III", es: "Artillería III", pt: "Artilharia III", ru: "Артиллерия III" },
  eqname_at: { zh: "反坦克炮 III", en: "Anti-Tank III", ja: "対戦車砲 III", ko: "대전차포 III", es: "Antitanque III", pt: "Canhão Antitanque III", ru: "Противотанковая пушка III" },
  eqname_aa: { zh: "防空炮 III", en: "Anti-Air III", ja: "対空砲 III", ko: "대공포 III", es: "Antiaéreo III", pt: "Canhão Antiaéreo III", ru: "Зенитное орудие III" },

  eqtype_tank: { zh: "坦克", en: "Tank", ja: "戦車", ko: "전차", es: "Tanques", pt: "Tanques", ru: "Танки" },
  eqname_lt3: { zh: "輕型坦克 III", en: "Light Tank III", ja: "軽戦車 III", ko: "경전차 III", es: "Tanque Ligero III", pt: "Tanque Leve III", ru: "Лёгкий танк III" },
  eqname_mt3: { zh: "中型坦克 III", en: "Medium Tank III", ja: "中戦車 III", ko: "중형 전차 III", es: "Tanque Medio III", pt: "Tanque Médio III", ru: "Средний танк III" },
  eqname_ht3: { zh: "重型坦克 III", en: "Heavy Tank III", ja: "重戦車 III", ko: "중전차 III", es: "Tanque Pesado III", pt: "Tanque Pesado III", ru: "Тяжёлый танк III" },
  eqname_modern: { zh: "現代坦克", en: "Modern Tank", ja: "現代戦車", ko: "현대 전차", es: "Tanque Moderno", pt: "Tanque Moderno", ru: "Современный танк" },

  eqtype_plane: { zh: "飛機", en: "Aircraft", ja: "航空機", ko: "항공기", es: "Aviones", pt: "Aviões", ru: "Авиация" },
  eqname_fighter: { zh: "戰鬥機 III", en: "Fighter III", ja: "戦闘機 III", ko: "전투기 III", es: "Caza III", pt: "Caça III", ru: "Истребитель III" },
  eqname_stratbomber: { zh: "戰略轟炸機 III", en: "Strategic Bomber III", ja: "戦略爆撃機 III", ko: "전략 폭격기 III", es: "Bombardero Estratégico III", pt: "Bombardeiro Estratégico III", ru: "Стратегический бомбардировщик III" },
  eqname_cas: { zh: "近距支援機 III", en: "CAS III", ja: "近接支援機 III", ko: "근접지원기 III", es: "Apoyo Aéreo Cercano III", pt: "Apoio Aéreo Aproximado III", ru: "Штурмовик III" },
  eqname_transport: { zh: "運輸機", en: "Transport Plane", ja: "輸送機", ko: "수송기", es: "Avión de Transporte", pt: "Avião de Transporte", ru: "Транспортный самолёт" },
  eqname_jet: { zh: "噴射戰鬥機 II", en: "Jet Fighter II", ja: "ジェット戦闘機 II", ko: "제트 전투기 II", es: "Caza a Reacción II", pt: "Caça a Jato II", ru: "Реактивный истребитель II" },

  eqtype_ship: { zh: "艦艇", en: "Naval", ja: "艦船", ko: "함선", es: "Buques", pt: "Navios", ru: "Флот" },
  eqname_destroyer: { zh: "驅逐艦 IV", en: "Destroyer IV", ja: "駆逐艦 IV", ko: "구축함 IV", es: "Destructor IV", pt: "Contratorpedeiro IV", ru: "Эсминец IV" },
  eqname_sub: { zh: "潛艦 IV", en: "Submarine IV", ja: "潜水艦 IV", ko: "잠수함 IV", es: "Submarino IV", pt: "Submarino IV", ru: "Подлодка IV" },
  eqname_carrier: { zh: "航空母艦 IV", en: "Carrier IV", ja: "空母 IV", ko: "항공모함 IV", es: "Portaaviones IV", pt: "Porta-aviões IV", ru: "Авианосец IV" },


  eqtype_supply: { zh: "補給", en: "Logistics", ja: "補給", ko: "보급", es: "Suministros", pt: "Suprimentos", ru: "Снабжение" },
  eqname_train: { zh: "火車", en: "Train", ja: "列車", ko: "기차", es: "Tren", pt: "Trem", ru: "Поезд" },
  eqname_railgun: { zh: "鐵道砲", en: "Railway Gun", ja: "列車砲", ko: "열차포", es: "Cañón Ferroviario", pt: "Canhão Ferroviário", ru: "Железнодорожное орудие" },

  // 頁尾
  footer_notice: {
    zh: "本網站為 HOI4 玩家社群自製參考工具，非 Paradox Interactive 官方產品。",
    en: "This website is a community-made reference tool for HOI4, not an official product of Paradox Interactive.",
    ja: "本サイトは HOI4 プレイヤーコミュニティによる自作の参考ツールであり、Paradox Interactive の公式製品ではありません。",
    ko: "이 웹사이트는 HOI4 플레이어 커뮤니티가 만든 참고 도구이며 Paradox Interactive의 공식 제품이 아닙니다.",
    es: "Este sitio web es una herramienta de referencia creada por la comunidad de HOI4 y no es un producto oficial de Paradox Interactive.",
    pt: "Este site é uma ferramenta de referência feita pela comunidade HOI4, não é um produto oficial da Paradox Interactive.",
    ru: "Этот сайт является справочным инструментом, созданным сообществом HOI4, и не является официальным продуктом Paradox Interactive."
  },
  footer_trademark: {
    zh: "Hearts of Iron IV 與其相關名稱為 Paradox Interactive 的註冊商標。",
    en: "Hearts of Iron IV and related names are trademarks of Paradox Interactive.",
    ja: "Hearts of Iron IV および関連する名称は Paradox Interactive の商標です。",
    ko: "Hearts of Iron IV 및 관련 이름은 Paradox Interactive의 상표입니다.",
    es: "Hearts of Iron IV y los nombres relacionados son marcas registradas de Paradox Interactive.",
    pt: "Hearts of Iron IV e nomes relacionados são marcas registradas da Paradox Interactive.",
    ru: "Hearts of Iron IV и связанные с ним названия являются товарными знаками Paradox Interactive."
  },
  footer_contact: {
    zh: "若有侵權疑慮請聯繫我們，我們將配合下架處理。",
    en: "If there are any concerns about copyright infringement, please contact us and we will take it down upon request.",
    ja: "著作権侵害の懸念がある場合はご連絡ください。必要に応じて削除いたします。",
    ko: "저작권 침해 우려가 있는 경우 문의해 주세요. 요청 시 삭제하겠습니다.",
    es: "Si hay inquietudes sobre infracción de derechos de autor, contáctanos y lo eliminaremos si es necesario.",
    pt: "Se houver preocupações com violação de direitos autorais, entre em contato e removeremos mediante solicitação.",
    ru: "Если у вас есть опасения по поводу нарушения авторских прав, свяжитесь с нами, и мы удалим содержимое по запросу."
  },
  footer_github: {
    zh: "GitHub 開源專案連結",
    en: "GitHub Open Source Project Link",
    ja: "GitHub オープンソースプロジェクトのリンク",
    ko: "GitHub 오픈 소스 프로젝트 링크",
    es: "Enlace al proyecto de código abierto en GitHub",
    pt: "Link do projeto de código aberto no GitHub",
    ru: "Ссылка на проект с открытым исходным кодом на GitHub"
  },
  footer_link: {
    zh: "前往 GitHub",
    en: "Go to GitHub",
    ja: "GitHub へ移動",
    ko: "GitHub로 이동",
    es: "Ir a GitHub",
    pt: "Ir para o GitHub",
    ru: "Перейти на GitHub"
  }  
};


const langMap = {
  zh: {
    title: "鋼鐵雄心4 指令工具箱",
    searchPlaceholder: "🔍 輸入關鍵字以搜尋指令...",
    sections: ["內政外交", "領土控制", "科技研究", "戰爭部隊", "將領經驗", "資源能源", "間諜特工", "隱藏指令", "工業設計", "裝備代碼表"],
    section_common_title: "🔁 常用控制台指令"
  },
  en: {
    title: "HOI4 Command Toolbox",
    searchPlaceholder: "🔍 Search commands...",
    sections: ["Politics", "Territory", "Research", "Army", "Generals", "Resources", "Spies", "Hidden", "Industry", "Equipment"],
    section_common_title: "🔁 Common Console Commands"
  },
  ja: {
    title: "HOI4 コマンドツールボックス",
    searchPlaceholder: "🔍 コマンドを検索...",
    sections: ["内政・外交", "領土", "研究", "戦闘", "将軍", "資源", "諜報", "隠しコマンド", "産業", "装備コード"],
    section_common_title: "🔁 よく使うコンソールコマンド"
  },
  ko: {
    title: "HOI4 명령어 도구상자",
    searchPlaceholder: "🔍 명령어를 검색하세요...",
    sections: ["정치", "영토", "연구", "군사", "장군", "자원", "첩보", "숨김 명령어", "산업", "장비 코드"],
    section_common_title: "🔁 자주 쓰는 콘솔 명령어"
  },
  es: {
    title: "Caja de Herramientas de Comandos HOI4",
    searchPlaceholder: "🔍 Buscar comandos...",
    sections: ["Política", "Territorio", "Investigación", "Ejército", "Generales", "Recursos", "Espías", "Ocultos", "Industria", "Equipamiento"],
    section_common_title: "🔁 Comandos de consola comunes"
  },
  pt: {
    title: "Caixa de Ferramentas de Comandos HOI4",
    searchPlaceholder: "🔍 Pesquisar comandos...",
    sections: ["Política", "Território", "Pesquisa", "Exército", "Generais", "Recursos", "Espionagem", "Ocultos", "Indústria", "Equipamento"],
    section_common_title: "🔁 Comandos de console comuns"
  },
  ru: {
    title: "Набор команд HOI4",
    searchPlaceholder: "🔍 Поиск команд...",
    sections: ["Политика", "Территория", "Исследования", "Армия", "Генералы", "Ресурсы", "Шпионаж", "Скрытые", "Промышленность", "Снаряжение"],
    section_common_title: "🔁 Часто используемые команды"
  },
};

// 將目前語言儲存為全域變數
let currentLang = localStorage.getItem("lang") || "zh";

function applyLanguage(lang) {
  currentLang = lang;
  const langData = langMap[lang] || langMap["zh"];
  document.querySelector("h1").textContent = langData.title;
  document.getElementById("searchBox").placeholder = langData.searchPlaceholder;

  // 導覽列
  const navLinks = document.querySelectorAll(".nav-left a");
  navLinks.forEach((link, i) => {
    if (langData.sections && langData.sections[i]) {
      link.textContent = langData.sections[i];
    }
  });

  // data-i18n 的翻譯
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (baseDescriptions?.[key]?.[lang]) {
      el.textContent = baseDescriptions[key][lang];
    } else if (langData?.[key]) {
      el.textContent = langData[key];
    }
  });
}

// 語言選擇切換
document.getElementById("langSelector").addEventListener("change", function () {
  const selectedLang = this.value;
  localStorage.setItem("lang", selectedLang);
  applyLanguage(selectedLang);
});

// 載入時套用語言
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langSelector").value = currentLang;
  applyLanguage(currentLang);
});

