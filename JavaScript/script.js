/* ═══════════════════════════════════════════
   BASE DE CONOCIMIENTO
═══════════════════════════════════════════ */
const CARRERAS=[
  {id:'C01',nombre:'Ing. en Sistemas Computacionales',emoji:'💻',area:'Tecnología',
   resumen:'Diseña, desarrolla y mantiene software, sistemas y aplicaciones. La carrera más demandada en el sector tech.',
   materias:['Programación','Estructuras de Datos','Bases de Datos','Redes','IA y ML','Ing. de Software'],
   empleos:[{i:'💼',t:'Desarrollador Full-Stack'},{i:'🤖',t:'Ing. de IA/ML'},{i:'🔐',t:'Ciberseguridad'},{i:'📱',t:'Apps móviles'},{i:'☁️',t:'Cloud/AWS'},{i:'🎮',t:'Videojuegos'}],
   sal:{j:'$12k–18k',m:'$20k–35k',s:'$40k–80k+'},skills:['Python','JavaScript','SQL','React','Docker','Git'],
   yt:[{q:'ingenieria sistemas computacionales mexico carrera',t:'¿Qué es Ing. en Sistemas?'},{q:'desarrollador software salario mexico 2024',t:'Salarios reales de un dev'},{q:'dia dia ingeniero sistemas mexico',t:'Un día como Ing. Sistemas'},{q:'programar carrera universidad mexico',t:'Programación como carrera'}],
   tt:'ingeniería en sistemas computacionales',demanda:'🔥 Altísima',
   futuro:'Con IA y digitalización, se proyectan más de 1.2M vacantes sin cubrir en México para 2030.'},

  {id:'C02',nombre:'Ing. Mecatrónica',emoji:'🤖',area:'Ingeniería',
   resumen:'Fusiona mecánica, electrónica y programación. Diseña robots, automatización y sistemas inteligentes.',
   materias:['Mecánica','Electrónica','Control Automático','Robótica','PLC','CNC'],
   empleos:[{i:'🏭',t:'Automatización'},{i:'🤖',t:'Robótica'},{i:'🚗',t:'Automotriz'},{i:'⚙️',t:'Mantenimiento'},{i:'📐',t:'Diseño mecánico'},{i:'🔬',t:'I+D'}],
   sal:{j:'$14k–20k',m:'$22k–38k',s:'$42k–75k'},skills:['SolidWorks','MATLAB','Arduino','PLC','ROS','AutoCAD'],
   yt:[{q:'ingenieria mecatronica mexico carrera',t:'¿Qué es Mecatrónica?'},{q:'automatizacion industrial salario mexico',t:'Salarios en automatización'},{q:'mecatronica dia a dia trabajo',t:'Un día como Mecatrónico'},{q:'mecatronica vs sistemas cual elegir',t:'Mecatrónica vs Sistemas'}],
   tt:'mecatrónica carrera',demanda:'🔥 Muy alta',
   futuro:'El Bajío es hub automotriz. Toyota, Honda, Mazda buscan mecatrónicos constantemente.'},

  {id:'C03',nombre:'Ing. Industrial',emoji:'🏭',area:'Ingeniería',
   resumen:'Optimiza procesos, reduce costos y mejora la eficiencia en plantas y organizaciones.',
   materias:['Inv. de Operaciones','Estadística','Lean Manufacturing','Six Sigma','Calidad','Ergonomía'],
   empleos:[{i:'📊',t:'Gerente de Producción'},{i:'🔄',t:'Lean/Six Sigma'},{i:'📦',t:'Logística'},{i:'✅',t:'Calidad'},{i:'📈',t:'Mejora continua'},{i:'🏗️',t:'Planeación'}],
   sal:{j:'$11k–17k',m:'$18k–32k',s:'$35k–65k'},skills:['Six Sigma','SAP','Minitab','Excel','Lean','AutoCAD'],
   yt:[{q:'ingenieria industrial mexico que hace',t:'¿Qué hace un Ing. Industrial?'},{q:'lean manufacturing mexico empresa',t:'Lean en México'},{q:'ingenieria industrial salario mexico 2024',t:'Salarios reales'},{q:'industrial vs mecatronica carrera',t:'Industrial vs Mecatrónica'}],
   tt:'ingeniería industrial',demanda:'⚡ Alta',
   futuro:'Celaya y el Bajío tienen alta concentración industrial. Mayor oferta local.'},

  {id:'C04',nombre:'Ing. Electrónica',emoji:'⚡',area:'Ingeniería',
   resumen:'Diseña circuitos, sistemas embebidos y dispositivos electrónicos. Todo aparato tiene un electrónico detrás.',
   materias:['Circuitos','Digital','Microprocesadores','Telecomunicaciones','Embebidos','Instrumentación'],
   empleos:[{i:'📡',t:'Telecomunicaciones'},{i:'🔌',t:'Diseño PCB'},{i:'🏥',t:'Electrónica médica'},{i:'🛰️',t:'Embebidos'},{i:'📻',t:'RF'},{i:'⚙️',t:'Mantenimiento'}],
   sal:{j:'$13k–18k',m:'$20k–36k',s:'$38k–70k'},skills:['Proteus','LabVIEW','FPGA','Arduino','MATLAB','C embebido'],
   yt:[{q:'ingenieria electronica mexico carrera',t:'¿Qué es Electrónica?'},{q:'sistemas embebidos carrera trabajo',t:'Sistemas embebidos'},{q:'electronica salario mexico',t:'Salarios Ing. Electrónico'},{q:'iot internet things carrera',t:'IoT y Electrónica'}],
   tt:'ingeniería electrónica',demanda:'⚡ Alta',
   futuro:'IoT, 5G y wearables disparan la demanda. Electrónica médica crece aceleradamente.'},

  {id:'C05',nombre:'Ing. Bioquímica',emoji:'🧬',area:'Ciencias',
   resumen:'Aplica biología y química a procesos industriales: alimentos, fármacos, biocombustibles y aguas.',
   materias:['Bioquímica','Microbiología','Biotecnología','Bioprocesos','Química Analítica','Op. Unitarias'],
   empleos:[{i:'💊',t:'Farmacéutica'},{i:'🍕',t:'Alimentaria'},{i:'🌿',t:'Biocombustibles'},{i:'💧',t:'Aguas'},{i:'🔬',t:'I+D'},{i:'🏭',t:'Control calidad'}],
   sal:{j:'$10k–15k',m:'$17k–28k',s:'$30k–55k'},skills:['HPLC','Fermentación','BPM','GMP','Biotecnología'],
   yt:[{q:'ingenieria bioquimica mexico carrera',t:'¿Qué es Bioquímica?'},{q:'biotecnologia industrial mexico trabajo',t:'Biotecnología industrial'},{q:'bioquimica salario mexico',t:'Salarios Bioquímica'},{q:'farmaceutica trabajo mexico',t:'Industria farmacéutica'}],
   tt:'ingeniería bioquímica',demanda:'📈 Media-Alta',
   futuro:'La pandemia aceleró la inversión en bioprocesos y farma. Potencial enorme.'},

  {id:'C06',nombre:'Ing. Química',emoji:'⚗️',area:'Ciencias',
   resumen:'Transforma materias primas en productos de valor: plásticos, combustibles, cosméticos. Opera plantas industriales.',
   materias:['Termodinámica','Transferencia Calor','Op. Unitarias','Control Procesos','Química Orgánica'],
   empleos:[{i:'🛢️',t:'PEMEX/Petroquímica'},{i:'🧴',t:'Cosméticos'},{i:'🎨',t:'Pinturas'},{i:'🏭',t:'Planta química'},{i:'♻️',t:'Ambiental'},{i:'🔬',t:'I+D'}],
   sal:{j:'$12k–17k',m:'$18k–32k',s:'$35k–65k'},skills:['Aspen Plus','HYSYS','AutoCAD P&ID','MATLAB'],
   yt:[{q:'ingenieria quimica mexico trabajo',t:'¿Qué hace un Ing. Químico?'},{q:'petroquimica carrera salario mexico',t:'Petroquímica: salarios'},{q:'quimica industrial dia a dia',t:'Un día como Ing. Químico'},{q:'quimica vs bioquimica carrera',t:'Química vs Bioquímica'}],
   tt:'ingeniería química',demanda:'⚡ Alta',
   futuro:'PEMEX y energías limpias ofrecen salidas muy bien remuneradas.'},

  {id:'C07',nombre:'Ing. en Gestión Empresarial',emoji:'📊',area:'Gestión',
   resumen:'Combina ingeniería con negocios. Lideras proyectos, optimizas organizaciones y tomas decisiones estratégicas.',
   materias:['Admin. Proyectos','Finanzas','Mercadotecnia','Calidad','Emprendimiento','Estadística'],
   empleos:[{i:'📋',t:'Gerente proyectos'},{i:'🚀',t:'Startups'},{i:'💹',t:'Consultoría'},{i:'📦',t:'Operaciones'},{i:'🏦',t:'Banca'},{i:'🌐',t:'Comercio exterior'}],
   sal:{j:'$11k–17k',m:'$19k–33k',s:'$36k–70k'},skills:['Excel','SAP','Power BI','Scrum','PMP','Project'],
   yt:[{q:'ingenieria gestion empresarial que es',t:'¿Qué es Gestión Empresarial?'},{q:'administracion proyectos salario mexico',t:'Salarios en proyectos'},{q:'emprendimiento carrera universitaria',t:'Emprender en la uni'},{q:'negocios ingenieria combinada',t:'Negocios + Ingeniería'}],
   tt:'gestión empresarial carrera',demanda:'⚡ Alta',
   futuro:'Corporativos buscan perfiles que combinen técnica y negocios. Muy bien remunerado.'},

  {id:'C08',nombre:'Lic. en Administración',emoji:'💼',area:'Gestión',
   resumen:'Administra recursos en cualquier organización. La carrera más versátil del catálogo.',
   materias:['Contabilidad','Derecho','RRHH','Finanzas','Mercadotecnia','Comportamiento Org.'],
   empleos:[{i:'👥',t:'RRHH'},{i:'💰',t:'Finanzas'},{i:'🏪',t:'PYMES'},{i:'📢',t:'Marketing'},{i:'🏦',t:'Banca'},{i:'🌐',t:'Comercio exterior'}],
   sal:{j:'$9k–14k',m:'$16k–26k',s:'$28k–55k'},skills:['Contabilidad','Excel','SAP','RRHH','Nóminas','Marketing Digital'],
   yt:[{q:'licenciatura administracion mexico carrera',t:'¿Qué es Administración?'},{q:'administracion empresas salario mexico',t:'Salarios en administración'},{q:'recursos humanos carrera trabajo',t:'Carrera en RRHH'},{q:'contabilidad finanzas carrera',t:'Finanzas y contabilidad'}],
   tt:'licenciatura administración',demanda:'📈 Media',
   futuro:'Demanda constante en todos los sectores. Banca y consultoría pagan mejor.'},

  {id:'C09',nombre:'Ing. Ambiental',emoji:'🌿',area:'Ciencias',
   resumen:'Protege el medio ambiente y desarrolla soluciones sustentables para industria y ciudades.',
   materias:['Ecología','Química Ambiental','Tratamiento Aguas','Residuos','Impacto Ambiental','Energías Renovables'],
   empleos:[{i:'💧',t:'Tratamiento aguas'},{i:'🌬️',t:'Emisiones'},{i:'☀️',t:'Energías renovables'},{i:'🏛️',t:'Auditorías'},{i:'♻️',t:'Residuos'},{i:'📋',t:'Peritos'}],
   sal:{j:'$10k–15k',m:'$16k–28k',s:'$30k–52k'},skills:['GIS','AutoCAD','NOM-001','ISO 14001','Muestreo'],
   yt:[{q:'ingenieria ambiental mexico carrera',t:'¿Qué es Ing. Ambiental?'},{q:'energias renovables carrera mexico',t:'Energías renovables'},{q:'sustentabilidad carrera trabajo',t:'Sustentabilidad y empleo'},{q:'ambiental salario mexico',t:'Salarios Ing. Ambiental'}],
   tt:'ingeniería ambiental',demanda:'📈 Creciendo',
   futuro:'La agenda ESG y transición energética aceleran la inversión. Sector en expansión.'},

  {id:'C10',nombre:'Ing. Biomédica',emoji:'🏥',area:'Ciencias',
   resumen:'Aplica ingeniería a la medicina: diseña equipos médicos, prótesis, sistemas de diagnóstico y tecnología hospitalaria.',
   materias:['Biología Celular','Anatomía','Instrumentación Médica','Señales Biomédicas','Biomecánica','Imágenes Médicas'],
   empleos:[{i:'🏥',t:'Hospitales y clínicas'},{i:'🔬',t:'Laboratorio médico'},{i:'💊',t:'Industria farmacéutica'},{i:'🦾',t:'Prótesis y ortesis'},{i:'📡',t:'Equipos de diagnóstico'},{i:'🧬',t:'I+D biomédico'}],
   sal:{j:'$12k–18k',m:'$20k–35k',s:'$38k–68k'},skills:['MATLAB','LabVIEW','SolidWorks','Arduino','Python','Señales ECG/EEG'],
   yt:[{q:'ingenieria biomedica mexico carrera',t:'¿Qué es Ing. Biomédica?'},{q:'biomedica salario mexico trabajo',t:'Salarios Ing. Biomédica'},{q:'ingenieria biomedica dia a dia',t:'Un día como Ing. Biomédico'},{q:'biomedica vs medicina diferencia',t:'Biomédica vs Medicina'}],
   tt:'ingeniería biomédica carrera',demanda:'🔥 Muy alta',
   futuro:'México tiene déficit de ingenieros biomédicos. El sector salud crece exponencialmente y la tecnología médica es uno de los mercados más rentables.'},

  {id:'C11',nombre:'Ing. Mecánica',emoji:'⚙️',area:'Ingeniería',
   resumen:'Diseña, analiza y fabrica sistemas mecánicos: motores, turbinas, estructuras y maquinaria industrial.',
   materias:['Mecánica de Materiales','Termodinámica','Dinámica','Diseño Mecánico','Manufactura','Elementos Finitos'],
   empleos:[{i:'🚗',t:'Industria automotriz'},{i:'✈️',t:'Aeronáutica'},{i:'⚙️',t:'Diseño de maquinaria'},{i:'🏭',t:'Manufactura'},{i:'🔧',t:'Mantenimiento industrial'},{i:'🔬',t:'I+D'}],
   sal:{j:'$13k–19k',m:'$21k–37k',s:'$40k–72k'},skills:['SolidWorks','AutoCAD','ANSYS','CATIA','Simulación FEA','GD&T'],
   yt:[{q:'ingenieria mecanica mexico carrera trabajo',t:'¿Qué hace un Ing. Mecánico?'},{q:'mecanica salario mexico 2024',t:'Salarios Ing. Mecánica'},{q:'mecanica vs mecatronica carrera diferencia',t:'Mecánica vs Mecatrónica'},{q:'ingenieria mecanica automotriz mexico',t:'Mecánica en la industria automotriz'}],
   tt:'ingeniería mecánica carrera',demanda:'🔥 Muy alta',
   futuro:'Con el nearshoring y el boom automotriz en el Bajío, la demanda de mecánicos nunca ha sido tan alta. Toyota, Mazda y Honda contratan egresados directamente.'},

  {id:'C12',nombre:'Ing. Semiconductores',emoji:'🔵',area:'Tecnología',
   resumen:'Diseña y fabrica chips, circuitos integrados y microprocesadores. La carrera del futuro en la era del silicio.',
   materias:['Física del Estado Sólido','Microelectrónica','Diseño VLSI','Fabricación de Chips','Materiales Semiconductores','Nanotecnología'],
   empleos:[{i:'🔵',t:'Diseño de chips'},{i:'🏭',t:'Fábricas de semiconductores'},{i:'🤖',t:'IA Hardware'},{i:'📱',t:'Electrónica de consumo'},{i:'🚗',t:'Automotriz electrónico'},{i:'🔬',t:'I+D nanotecnología'}],
   sal:{j:'$18k–26k',m:'$30k–55k',s:'$60k–120k+'},skills:['VHDL','Verilog','Cadence','Synopsis','Python','Física cuántica'],
   yt:[{q:'ingenieria semiconductores mexico carrera',t:'¿Qué es Ing. Semiconductores?'},{q:'chips semiconductores carrera futuro',t:'Semiconductores: la carrera del futuro'},{q:'semiconductores salario mexico',t:'Salarios en semiconductores'},{q:'mexico semiconductores nearshoring oportunidad',t:'México y la industria de chips'}],
   tt:'ingeniería semiconductores carrera',demanda:'🔥 Altísima',
   futuro:'México es clave en la cadena global de semiconductores. Con la guerra comercial EUA-China, el país se posiciona como hub de chips. Los salarios son los más altos de toda la ingeniería.'},
]

const PREGUNTAS=[
  {id:'mat',texto:'¿Qué tan bueno/a eres con las matemáticas y el pensamiento lógico?',tipo:'escala',min:'Me cuesta trabajo',max:'Es mi fuerte'},
  {id:'prog',texto:'¿Cuánto te gusta programar o crear software?',tipo:'escala',min:'Para nada',max:'Es mi pasión'},
  {id:'quim',texto:'¿Qué tan cómodo/a te sientes con química y biología?',tipo:'escala',min:'No me gustan',max:'Las domino'},
  {id:'maquinas',texto:'¿Te gusta armar, reparar o diseñar máquinas y aparatos?',tipo:'bool',ops:['Sí, me fascina 🔧','No mucho'],vals:[1,0]},
  {id:'trabajo',texto:'¿En qué ambiente de trabajo te imaginas mejor?',tipo:'op',ops:['Oficina 🏢','Laboratorio 🧪','Taller/Planta 🏭','Campo 🌳','Remoto/Mixto 💻'],vals:['oficina','laboratorio','taller','campo','mixto']},
  {id:'liderazgo',texto:'¿Te gusta coordinar equipos y tomar decisiones estratégicas?',tipo:'escala',min:'Prefiero trabajar solo',max:'Me encanta liderar'},
  {id:'naturaleza',texto:'¿Cuánto te importa el medio ambiente y la sustentabilidad?',tipo:'escala',min:'Poco',max:'Es mi prioridad'},
  {id:'dibujo',texto:'¿Tienes habilidad para diseño técnico, planos o arquitectura?',tipo:'bool',ops:['Sí, soy bueno/a ✏️','No es lo mío'],vals:[1,0]},
  {id:'negocios',texto:'¿Te interesa el mundo de los negocios o el emprendimiento?',tipo:'escala',min:'No mucho',max:'Es mi vocación'},
];

const REGLAS=[
  {id:'R01',c:'C01',score:.95,conds:[{v:'mat',op:'>=',val:4},{v:'prog',op:'>=',val:4},{v:'trabajo',op:'IN',val:['mixto','oficina']}]},
  {id:'R02',c:'C02',score:.93,conds:[{v:'mat',op:'>=',val:4},{v:'maquinas',op:'=',val:1},{v:'prog',op:'>=',val:3},{v:'trabajo',op:'IN',val:['taller','mixto']}]},
  {id:'R03',c:'C03',score:.91,conds:[{v:'mat',op:'>=',val:3},{v:'liderazgo',op:'>=',val:3},{v:'trabajo',op:'IN',val:['taller','mixto']}]},
  {id:'R04',c:'C04',score:.92,conds:[{v:'mat',op:'>=',val:4},{v:'maquinas',op:'=',val:1},{v:'trabajo',op:'IN',val:['taller','laboratorio']}]},
  {id:'R05',c:'C05',score:.90,conds:[{v:'quim',op:'>=',val:4},{v:'mat',op:'>=',val:3},{v:'trabajo',op:'IN',val:['laboratorio']}]},
  {id:'R06',c:'C06',score:.90,conds:[{v:'quim',op:'>=',val:4},{v:'mat',op:'>=',val:4},{v:'trabajo',op:'IN',val:['laboratorio','taller']}]},
  {id:'R07',c:'C07',score:.89,conds:[{v:'liderazgo',op:'>=',val:4},{v:'negocios',op:'>=',val:3},{v:'mat',op:'>=',val:2}]},
  {id:'R08',c:'C08',score:.87,conds:[{v:'liderazgo',op:'>=',val:3},{v:'negocios',op:'>=',val:4},{v:'trabajo',op:'IN',val:['oficina','mixto']}]},
  {id:'R09',c:'C09',score:.88,conds:[{v:'naturaleza',op:'>=',val:4},{v:'quim',op:'>=',val:3},{v:'trabajo',op:'IN',val:['campo','laboratorio']}]},
  {id:'R10',c:'C10',score:.91,conds:[{v:'quim',op:'>=',val:3},{v:'mat',op:'>=',val:3},{v:'trabajo',op:'IN',val:['laboratorio','oficina']}]},
  {id:'R11',c:'C11',score:.92,conds:[{v:'mat',op:'>=',val:4},{v:'maquinas',op:'=',val:1},{v:'trabajo',op:'IN',val:['taller','campo']}]},
  {id:'R12',c:'C12',score:.94,conds:[{v:'mat',op:'>=',val:5},{v:'prog',op:'>=',val:3},{v:'trabajo',op:'IN',val:['laboratorio','oficina']}]},
]

/* ═══ ESTADO ═══ */
const S={fase:'home',perfil:{},pregIdx:0,historial:[],resultados:[]};

/* ═══ MOTOR ═══ */
function evalC(c,p){const v=p[c.v];if(v===undefined||v===null)return false;if(c.op==='>=')return Number(v)>=Number(c.val);if(c.op==='=')return v==c.val;if(c.op==='IN')return c.val.includes(v);return false;}
function recomendar(p){return REGLAS.map(r=>{const car=CARRERAS.find(c=>c.id===r.c);const tot=r.conds.length,ok=r.conds.filter(c=>evalC(c,p)).length;return{...car,score:ok===tot?r.score:(ok/tot)*r.score};}).sort((a,b)=>b.score-a.score).slice(0,3);}

/* ═══ THEME ═══ */
let dark=true;
function toggleTheme(){
  dark=!dark;
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  const ico=dark?'☀️':'🌙';
  const lbl=dark?'Modo claro':'Modo oscuro';
  const t1=document.getElementById('themeToggle'),t2=document.getElementById('themeToggle2');
  if(t1){t1.textContent=ico;}
  if(t2){t2.textContent=ico;}
  const tl=document.getElementById('themeLabel');
  if(tl)tl.textContent=lbl;
}

/* ═══ DOM REFS ═══ */
const $home=document.getElementById('homeView');
const $chatV=document.getElementById('chatView');
const $panel=document.getElementById('chatPanel');
const $input=document.getElementById('inputBox');
const $send=document.getElementById('sendBtn');
const $prog=document.getElementById('progWrap');
const $fill=document.getElementById('progFill');
const $plbl=document.getElementById('progLabel');
const $topT=document.getElementById('topbarTitle');
const $topS=document.getElementById('topbarSub');
const $btnBack=document.getElementById('btnBack');

const wait=ms=>new Promise(r=>setTimeout(r,ms));
const scrollChat=()=>setTimeout(()=>$panel.scrollTo({top:$panel.scrollHeight,behavior:'smooth'}),80);

function setStatus(s){
  ['sdot','sdot2'].forEach(id=>{const el=document.getElementById(id);if(el)el.className='sdot'+(s==='busy'?' busy':'');});
  ['slbl','slbl2'].forEach(id=>{const el=document.getElementById(id);if(el){el.textContent=s==='busy'?'Procesando…':'IA activa';}});
}

function md(t){return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/`(.*?)`/g,'<code>$1</code>').replace(/\n/g,'<br>');}

function addMsg(who,html,extra){
  const d=document.createElement('div');d.className='msg '+who;
  const av=document.createElement('div');av.className='av '+(who==='bot'?'bot':'usr');
  av.textContent=who==='bot'?'🎓':'Tú';
  const b=document.createElement('div');b.className='bubble';
  b.innerHTML=md(html);if(extra)b.appendChild(extra);
  d.appendChild(av);d.appendChild(b);$panel.appendChild(d);scrollChat();return b;
}
function addCard(el){const d=document.createElement('div');d.className='msg bot';const av=document.createElement('div');av.className='av bot';av.textContent='🎓';d.appendChild(av);d.appendChild(el);$panel.appendChild(d);scrollChat();}

let typEl=null;
function showTyping(){if(typEl)return;const d=document.createElement('div');d.className='msg bot';d.id='typ';const av=document.createElement('div');av.className='av bot';av.textContent='🎓';const b=document.createElement('div');b.className='bubble';b.innerHTML='<div class="typing"><div class="td"></div><div class="td"></div><div class="td"></div></div>';d.appendChild(av);d.appendChild(b);$panel.appendChild(d);scrollChat();typEl=d;}
function removeTyping(){if(typEl){typEl.remove();typEl=null;}}

/* ═══ VISTAS ═══ */
function showChatView(title,sub){
  $home.classList.add('hidden');
  $chatV.classList.remove('hidden');
  if($topT)$topT.textContent=title||'Chat';
  if($topS)$topS.textContent=sub||'';
  if($btnBack)$btnBack.classList.remove('hidden');
  setSbActive(null);
}
function showHomeView(){
  $chatV.classList.add('hidden');
  $prog.classList.add('hidden');
  $home.classList.remove('hidden');
  if($topT)$topT.textContent='Orientación Vocacional';
  if($topS)$topS.textContent='Selecciona una carrera o inicia el cuestionario';
  if($btnBack)$btnBack.classList.add('hidden');
}
function goHome(){
  S.fase='home';S.perfil={};S.pregIdx=0;S.historial=[];
  $input.disabled=true;$send.disabled=true;$panel.innerHTML='';
  showHomeView();setSbActive('sbHome');
}
function setSbActive(id){
  document.querySelectorAll('.sb-btn').forEach(b=>b.classList.remove('active'));
  if(id){const el=document.getElementById(id);if(el)el.classList.add('active');}
}

/* ═══ SIDEBAR CARRERAS ═══ */
function renderSidebar(){
  const cont=document.getElementById('sbCarreras');
  CARRERAS.forEach(c=>{
    const btn=document.createElement('button');btn.className='sb-btn';btn.id='sb-'+c.id;
    btn.innerHTML=`<span class="sb-btn-icon">${c.emoji}</span><div class="sb-btn-txt"><div class="sb-btn-name">${c.nombre}</div><div class="sb-btn-meta">${c.area}</div></div><div class="sb-btn-sal">${c.sal.m.split('–')[0]}</div>`;
    btn.onclick=()=>showCareerDetail(c);
    cont.appendChild(btn);
  });
}

/* ═══ AI ═══ */
const SYS=`Eres el orientador vocacional del Instituto Tecnológico de Celaya (ITC Celaya), parte del TecNM. Ayudas a estudiantes de preparatoria a elegir su carrera universitaria.
Las 12 carreras del ITC Celaya: Ing. en Sistemas Computacionales, Ing. Mecatrónica, Ing. Industrial, Ing. Electrónica, Ing. Bioquímica, Ing. Química, Ing. en Gestión Empresarial, Lic. en Administración, Ing. Ambiental, Ing. Biomédica, Ing. Mecánica, Ing. Semiconductores.
Reglas: español siempre, tono cálido y motivador como orientador humano real, salarios en MXN reales, máximo 3 párrafos, emojis con moderación, no inventes datos del ITC remite a itcelaya.edu.mx.`;

async function callAI(msg,extra){
  setStatus('busy');showTyping();
  S.historial.push({role:'user',content:msg});
  try{
    const r=await fetch('https://piop-api.canooscar516.workers.dev',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:1000,system:SYS+(extra?'\n\n'+extra:''),messages:S.historial})});
    const data=await r.json();if(data.error)throw new Error(data.error.message);
    const reply=data.content.map(b=>b.text||'').join('');
    removeTyping();addMsg('bot',reply);S.historial.push({role:'assistant',content:reply});setStatus('on');
  }catch(e){removeTyping();setStatus('on');addMsg('bot','Hubo un problema al conectar con la IA. Verifica tu conexión e intenta de nuevo.');console.error(e);}
}

async function quickAI(prompt,el){
  el.textContent='Consultando…';el.style.fontStyle='italic';el.classList.remove('loaded');
  try{
    const r=await fetch('https://piop-api.canooscar516.workers.dev',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:500,system:SYS,messages:[{role:'user',content:prompt}]})});
    const data=await r.json();if(data.error)throw new Error(data.error.message);
    el.innerHTML=md(data.content.map(b=>b.text||'').join(''));el.style.fontStyle='normal';el.classList.add('loaded');
  }catch(e){el.textContent='Error al conectar. Intenta de nuevo.';}
}

/* ═══ CUESTIONARIO ═══ */
async function startQuiz(){
  S.fase='preguntas';S.pregIdx=0;S.perfil={};S.historial=[];
  $panel.innerHTML='';
  showChatView('Cuestionario Vocacional','9 preguntas · ~5 min');
  setSbActive('sbQuiz');
  $prog.classList.remove('hidden');updateProg();
  showTyping();await wait(700);removeTyping();
  addMsg('bot','¡Hola! Soy tu orientador del **ITC Celaya**. 🎓\n\nVoy a hacerte **9 preguntas** para conocer tu perfil. No hay respuestas correctas — responde con honestidad.\n\n¡Empecemos!');
  await wait(300);showQ(0);
}

function updateProg(){const p=Math.round(S.pregIdx/PREGUNTAS.length*100);$fill.style.width=p+'%';$plbl.textContent=S.pregIdx+' / '+PREGUNTAS.length;}

function showQ(idx){
  if(idx>=PREGUNTAS.length){calcResults();return;}
  const q=PREGUNTAS[idx],cont=document.createElement('div');
  if(q.tipo==='escala'){
    const row=document.createElement('div');row.className='scale-row';
    for(let i=1;i<=5;i++){const b=document.createElement('button');b.className='bs';b.textContent=i;b.onclick=()=>answerScale(q,i,row);row.appendChild(b);}
    const labs=document.createElement('div');labs.className='scale-labs';labs.innerHTML=`<span>${q.min}</span><span>${q.max}</span>`;
    cont.appendChild(row);cont.appendChild(labs);
  }else{
    const g=document.createElement('div');g.className='btn-group';
    q.ops.forEach((op,i)=>{const b=document.createElement('button');b.className='bc';b.textContent=op;b.onclick=()=>answerOp(q,q.vals?q.vals[i]:op,g,op);g.appendChild(b);});
    cont.appendChild(g);
  }
  setTimeout(()=>addMsg('bot',`**${S.pregIdx+1} de 9** — ${q.texto}`,cont),280);
}

function answerScale(q,v,cont){cont.querySelectorAll('.bs').forEach(b=>b.classList.add('used'));S.perfil[q.id]=v;const lbls=['','Muy bajo','Bajo','Regular','Alto','Muy alto'];addMsg('user',`${v}/5 — ${lbls[v]}`);S.pregIdx++;updateProg();setTimeout(()=>showQ(S.pregIdx),440);}
function answerOp(q,v,cont,label){cont.querySelectorAll('.bc').forEach(b=>b.classList.add('used'));S.perfil[q.id]=v;addMsg('user',label);S.pregIdx++;updateProg();setTimeout(()=>showQ(S.pregIdx),440);}

/* ═══ RESULTADOS ═══ */
async function calcResults(){
  S.fase='resultado';
  showTyping();await wait(1100);removeTyping();
  const top=recomendar(S.perfil);S.resultados=top;
  addMsg('bot','Analicé las **12 carreras** con tu perfil. Aquí están tus mejores opciones — toca cualquiera para ver todos los detalles:');
  const wrap=document.createElement('div');wrap.className='rank-wrap';
  const medals=['🥇','🥈','🥉'];
  top.forEach((c,i)=>{
    const pct=Math.round(c.score*100);
    const row=document.createElement('div');row.className='rank-row';
    row.innerHTML=`<div class="rank-medal">${medals[i]}</div><div class="rank-info"><div class="rank-name">${c.emoji} ${c.nombre}</div><div class="rank-bar"><div class="rank-fill r${i}" id="rf${i}"></div></div></div><div class="rank-pct" id="rp${i}">0%</div>`;
    row.onclick=()=>showCareerDetail(c,i);wrap.appendChild(row);
  });
  addCard(wrap);
  await wait(150);
  top.forEach((c,i)=>{const pct=Math.round(c.score*100);setTimeout(()=>{const f=document.getElementById('rf'+i),p=document.getElementById('rp'+i);if(f)f.style.width=pct+'%';if(p)animNum(p,pct);},i*160);});
  const pSum=Object.entries(S.perfil).map(([k,v])=>`${k}:${v}`).join(', ');
  S.historial=[{role:'user',content:`Mi perfil: ${pSum}. Recomendaciones: 1. ${top[0].nombre} (${Math.round(top[0].score*100)}%), 2. ${top[1].nombre} (${Math.round(top[1].score*100)}%), 3. ${top[2].nombre} (${Math.round(top[2].score*100)}%).`},{role:'assistant',content:`Perfecto, ya tengo tu perfil. Puedo darte información detallada sobre cualquiera de las 13 carreras del ITC.`}];
  await wait(1600);
  const btns=document.createElement('div');btns.className='btn-group';
  top.forEach((c,i)=>{const b=document.createElement('button');b.className='bc';b.textContent=`${c.emoji} Ver ${c.nombre.replace(/Ing\. en |Ing\. |Lic\. en /,'').split(' ').slice(0,2).join(' ')}`;b.onclick=()=>{btns.querySelectorAll('.bc').forEach(x=>x.classList.add('used'));showCareerDetail(c,i);};btns.appendChild(b);});
  addMsg('bot',`🎯 **${top[0].nombre}** es tu mejor opción con **${Math.round(top[0].score*100)}% de afinidad**.\n\nToca cualquier carrera para ver sueldos, empleos, videos y más. O escríbeme abajo 👇`,btns);
  S.fase='libre';$input.disabled=false;$send.disabled=false;$input.placeholder='Pregúntame sobre cualquier carrera del ITC…';$prog.classList.add('hidden');
  setTimeout(()=>$input.focus(),400);
}

function animNum(el,t){let n=0;const s=Math.ceil(t/26);const iv=setInterval(()=>{n=Math.min(n+s,t);el.textContent=n+'%';if(n>=t)clearInterval(iv);},26);}

/* ═══ CAREER DETAIL ═══ */
function showCareerDetail(car,rank){
  const pct=rank!==undefined&&S.resultados[rank]?Math.round(S.resultados[rank].score*100):null;
  showChatView(car.nombre,car.area+' · ITC Celaya');
  setSbActive('sb-'+car.id);
  const card=document.createElement('div');card.className='career-detail';
  card.innerHTML=`
    <div class="cd-hero">
      ${pct?`<div class="cd-match">${pct}% afín</div>`:''}
      <span class="cd-emoji">${car.emoji}</span>
      <div class="cd-title">${car.nombre}</div>
      <div class="cd-area">${car.area} · ITC Celaya · TecNM</div>
    </div>
    <div class="cd-tabs">
      <button class="tab-btn active" data-tab="res">Resumen</button>
      <button class="tab-btn" data-tab="sal">Sueldos</button>
      <button class="tab-btn" data-tab="emp">Empleos</button>
      <button class="tab-btn" data-tab="vid">Videos</button>
      <button class="tab-btn" data-tab="ia">Preguntar IA</button>
    </div>
    <div class="cd-body">
      <div class="tab-panel active" id="tp-res-${car.id}"></div>
      <div class="tab-panel" id="tp-sal-${car.id}"></div>
      <div class="tab-panel" id="tp-emp-${car.id}"></div>
      <div class="tab-panel" id="tp-vid-${car.id}"></div>
      <div class="tab-panel" id="tp-ia-${car.id}"></div>
    </div>`;
  card.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.onclick=()=>{
      card.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      card.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const tp=card.querySelector('#tp-'+btn.dataset.tab+'-'+car.id);tp.classList.add('active');
      if(btn.dataset.tab==='vid'&&!tp.dataset.loaded){tp.dataset.loaded='1';fillVideos(car,tp);}
    };
  });
  fillResumen(car,card.querySelector('#tp-res-'+car.id));
  fillSueldos(car,card.querySelector('#tp-sal-'+car.id));
  fillEmpleos(car,card.querySelector('#tp-emp-'+car.id));
  fillIA(car,card.querySelector('#tp-ia-'+car.id));
  $panel.innerHTML='';
  addCard(card);
}

function fillResumen(c,el){el.innerHTML=`<div class="info-lbl">¿Qué es?</div><div class="info-txt">${c.resumen}</div><div class="divider"></div><div class="info-lbl">Demanda laboral</div><div class="info-txt">${c.demanda} — ${c.futuro}</div><div class="divider"></div><div class="info-lbl">Materias</div><div class="tags">${c.materias.map(m=>`<span class="tag">📚 ${m}</span>`).join('')}</div><div class="divider"></div><div class="info-lbl">Habilidades técnicas</div><div class="tags">${c.skills.map(s=>`<span class="tag">⚙️ ${s}</span>`).join('')}</div>`;}
function fillSueldos(c,el){el.innerHTML=`<div class="info-lbl">Salario mensual bruto en México</div><div class="salary-grid"><div class="sal-box"><div class="sal-lbl">Junior</div><div class="sal-val">$${c.sal.j}</div><div class="sal-sub">0–2 años</div></div><div class="sal-box"><div class="sal-lbl">Mid-level</div><div class="sal-val">$${c.sal.m}</div><div class="sal-sub">3–6 años</div></div><div class="sal-box"><div class="sal-lbl">Senior</div><div class="sal-val">$${c.sal.s}</div><div class="sal-sub">7+ años</div></div></div><div class="divider"></div><div class="info-lbl">Perspectivas</div><div class="info-txt">${c.demanda} · ${c.futuro}</div><div class="divider"></div><div class="info-lbl">Habilidades mejor pagadas</div><div class="tags">${c.skills.map(s=>`<span class="tag">💎 ${s}</span>`).join('')}</div>`;}
function fillEmpleos(c,el){el.innerHTML=`<div class="info-lbl">Puestos típicos</div><div class="job-list">${c.empleos.map(j=>`<div class="job-row"><span class="job-icon">${j.i}</span><span class="job-txt">${j.t}</span></div>`).join('')}</div><div class="divider"></div><div class="info-lbl">Empresas en Celaya y el Bajío</div><div class="info-txt">El Bajío concentra empresas como <strong style="color:var(--text2)">Toyota, Honda, Mazda, Nestlé, General Motors, Lala</strong> y cientos de proveedoras. El ITC tiene convenios de prácticas con muchas de ellas.</div><div class="divider"></div><div class="info-lbl">Más opciones</div><div class="tags"><span class="tag">🏛️ Gobierno</span><span class="tag">🎓 Docencia</span><span class="tag">🚀 Emprendimiento</span><span class="tag">🌎 Home office</span><span class="tag">🇺🇸 EUA/Canadá</span></div>`;}
function fillVideos(c,el){
  const grid=document.createElement('div');grid.className='yt-grid';
  c.yt.forEach(v=>{const url=`https://www.youtube.com/results?search_query=${encodeURIComponent(v.q)}`;const a=document.createElement('a');a.className='yt-card';a.href=url;a.target='_blank';a.rel='noopener';a.innerHTML=`<div class="yt-thumb"><span>${c.emoji}</span><div class="play-icon"><div class="play-btn"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div></div></div><div class="yt-info"><div class="yt-title">${v.t}</div><div class="yt-source">Ver en YouTube →</div></div>`;grid.appendChild(a);});
  el.appendChild(grid);
  const ext=document.createElement('div');ext.className='ext-row';
  ext.innerHTML=`<a class="ext-link" href="https://www.tiktok.com/search?q=${encodeURIComponent(c.tt)}" target="_blank" rel="noopener"><span class="ext-icon">📱</span><div class="ext-txt"><div class="ext-title">TikTok — "${c.tt}"</div><div class="ext-sub">Testimonios de estudiantes y egresados</div></div><span class="ext-arr">›</span></a><a class="ext-link" href="https://www.youtube.com/results?search_query=${encodeURIComponent('ITC Celaya '+c.nombre)}" target="_blank" rel="noopener"><span class="ext-icon">🏫</span><div class="ext-txt"><div class="ext-title">ITC Celaya en YouTube</div><div class="ext-sub">Busca egresados y eventos del campus</div></div><span class="ext-arr">›</span></a>`;
  el.appendChild(ext);
}
function fillIA(c,el){
  const qs=[`¿Por qué estudiar ${c.nombre.replace(/Ing\. en |Ing\. |Lic\. en /,'')}?`,`¿Cuánto gana un egresado en México?`,`¿Qué materias son las más difíciles?`,`¿Cuáles son las mejores empresas?`,`¿Puedo emprender con esta carrera?`];
  const resp=document.createElement('div');resp.className='ai-resp';resp.textContent='Selecciona una pregunta o escríbela abajo 👇';
  const qrow=document.createElement('div');qrow.className='ai-qrow';
  qs.forEach(q=>{const b=document.createElement('button');b.className='ai-qbtn';b.textContent=q.length>38?q.slice(0,36)+'…':q;b.onclick=()=>quickAI(`Sobre ${c.nombre} en el ITC Celaya: ${q}`,resp);qrow.appendChild(b);});
  const custom=document.createElement('div');custom.className='ai-custom';
  const inp=document.createElement('input');inp.className='ai-input';inp.type='text';inp.placeholder='Tu pregunta sobre esta carrera…';
  const btn=document.createElement('button');btn.className='ai-submit';btn.textContent='Preguntar';
  btn.onclick=()=>{if(inp.value.trim())quickAI(`Sobre ${c.nombre} en el ITC Celaya: ${inp.value}`,resp);};
  inp.onkeydown=e=>{if(e.key==='Enter')btn.click();};
  custom.appendChild(inp);custom.appendChild(btn);
  el.appendChild(qrow);el.appendChild(resp);el.appendChild(custom);
}

/* ═══ CHAT LIBRE ═══ */
async function goFreeChat(){
  S.fase='libre';S.historial=[];$panel.innerHTML='';
  showChatView('Chat con IA','Pregunta lo que quieras sobre las carreras');
  addMsg('bot','¡Hola! Puedo responderte cualquier duda sobre las **12 carreras del ITC Celaya** 🎓\n\nPregúntame sobre materias, sueldos, campo laboral, diferencias entre carreras o lo que necesites.');
  $input.disabled=false;$send.disabled=false;$input.placeholder='¿Sobre qué carrera quieres saber?';
  setTimeout(()=>$input.focus(),300);
}

async function sendMsg(){
  const msg=$input.value.trim();if(!msg)return;
  $input.value='';$input.style.height='auto';
  addMsg('user',msg);
  const found=CARRERAS.find(c=>msg.toLowerCase().includes(c.nombre.split(' ').slice(-1)[0].toLowerCase())||msg.toLowerCase().includes((c.nombre.split(' ').slice(-2,-1)[0]||'').toLowerCase()));
  await callAI(msg);
  if(found&&S.fase==='libre'){
    const b=document.createElement('button');b.className='bc';
    b.textContent=`${found.emoji} Ver ficha de ${found.nombre.replace(/Ing\. en |Ing\. |Lic\. en /,'').split(' ').slice(0,3).join(' ')}`;
    b.onclick=()=>{b.classList.add('used');showCareerDetail(found);};
    const wrap=document.createElement('div');wrap.className='btn-group';wrap.appendChild(b);
    addMsg('bot','Aquí puedes ver toda la información:',wrap);
  }
}

$input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}});
$input.addEventListener('input',()=>{$input.style.height='auto';$input.style.height=Math.min($input.scrollHeight,100)+'px';});

/* ═══ INIT ═══ */
renderSidebar();
setSbActive('sbHome');