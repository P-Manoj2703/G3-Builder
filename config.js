// ═══════════════════════════════════════════════════════════════
// G3 BUILDERS — MASTER CONFIG
// Edit only this file. Everything else reads from here.
// To add category/vendor/flat/person: add one line below.
// Push to GitHub → app updates everywhere automatically.
// ═══════════════════════════════════════════════════════════════

const G3_CONFIG = {

  app: {
    name:         'G3 Builders',
    company:      'MicroRealty India Pvt Ltd',
    projectName:  'Project 2 — Vizag',
    ownerPhone:   '919XXXXXXXXX',
    siteGPS:      { lat: 17.6868, lng: 83.2185 },
    siteRadiusKm: 2,
    photoMaxAgeDays: 1,
    ownerPin:     '9999',
    sheetURL:     'https://script.google.com/macros/s/AKfycbwxLoKSp2WcEHsynx37PjzP2WpIlhFMd7zmxSBDaVyqF6b5OzHRNFHBu5h5eb0bpheu/exec',
  },

  people: [
    { id: 'supervisor', name: 'Supervisor', initial: 'S', role: 'supervisor' },
    { id: 'watchman',   name: 'Watchman',   initial: 'W', role: 'supervisor' },
    { id: 'kumar',      name: 'Kumar',      initial: 'K', role: 'partner'    },
    { id: 'father',     name: 'Father (R)', initial: 'R', role: 'partner'    },
    { id: 'owner',      name: 'Owner',      initial: 'O', role: 'owner'      },
  ],

  categories: [
    { id: 'labour',      name: 'Labour / NMR',        emoji: '👷', type: 'expense', roles: 'all',     workerCount: true  },
    { id: 'materials',   name: 'Sand, Metal, Brick',  emoji: '🏖️', type: 'expense', roles: 'all'                        },
    { id: 'steel',       name: 'Steel',               emoji: '⚙️', type: 'expense', roles: 'all'                        },
    { id: 'cement',      name: 'Cement',              emoji: '🏗️', type: 'expense', roles: 'all'                        },
    { id: 'rmc',         name: 'RMC',                 emoji: '🚛', type: 'expense', roles: 'all'                        },
    { id: 'transport',   name: 'Transport / JCB',     emoji: '🚜', type: 'expense', roles: 'all'                        },
    { id: 'electrical',  name: 'Electrical',          emoji: '⚡', type: 'expense', roles: 'all'                        },
    { id: 'plumbing',    name: 'Plumbing',            emoji: '🔧', type: 'expense', roles: 'all'                        },
    { id: 'utilities',   name: 'Site Utilities',      emoji: '🔌', type: 'expense', roles: 'all'                        },
    { id: 'petty',       name: 'Tea / Petty',         emoji: '☕', type: 'expense', roles: 'all'                        },
    { id: 'misc',        name: 'Misc / Other',        emoji: '📦', type: 'expense', roles: 'all'                        },
    { id: 'salary',      name: 'Salaries',            emoji: '👤', type: 'expense', roles: 'partner', personMonth: true  },
    { id: 'prof',        name: 'Professional Fees',   emoji: '📐', type: 'expense', roles: 'partner'                    },
    { id: 'donation',    name: 'Donations / Chandha', emoji: '🙏', type: 'expense', roles: 'partner'                    },
    { id: 'loan',        name: 'Loan & Interest',     emoji: '💰', type: 'expense', roles: 'owner'                      },
    { id: 'govt',        name: 'Govt & Approvals',    emoji: '🏛️', type: 'expense', roles: 'owner',   flatNo: true       },
    { id: 'press',       name: 'Press & Relations',   emoji: '📰', type: 'expense', roles: 'owner'                      },
    { id: 'commission',  name: 'Sales Commission',    emoji: '🤝', type: 'expense', roles: 'owner',   flatNo: true       },
    { id: 'land_adv',    name: 'Land Advance',        emoji: '🏡', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_reg',    name: 'Land Registration',   emoji: '📜', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_med',    name: 'Land Mediator',       emoji: '🤲', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_doc',    name: 'Land Documents',      emoji: '📋', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_tax',    name: 'Land Tax / TDS',      emoji: '🧾', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_int',    name: 'Land Interest',       emoji: '📈', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_soil',   name: 'Land Soil Test',      emoji: '🔬', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'land_misc',   name: 'Land Misc',           emoji: '🏘️', type: 'land',    roles: 'owner',   landSite: true     },
    { id: 'cap_partner', name: 'Partner Capital In',  emoji: '💼', type: 'capital', roles: 'owner'                      },
    { id: 'cap_loan',    name: 'Loan Received',       emoji: '🏦', type: 'capital', roles: 'owner'                      },
    { id: 'cap_sale',    name: 'Sale Receipt',        emoji: '🏠', type: 'capital', roles: 'owner',   flatNo: true       },
    { id: 'cap_misc',    name: 'Other Inflow',        emoji: '➕', type: 'capital', roles: 'owner'                      },
  ],

  payModes: [
    { id: 'upi',    name: 'UPI / PhonePe',   icon: '📱', screenshot: true },
    { id: 'cash',   name: 'Cash',            icon: '💵', confirm: true    },
    { id: 'imps',   name: 'IMPS / NEFT',     icon: '🏦', utr: true        },
    { id: 'cheque', name: 'Cheque',          icon: '📝', chequeNo: true   },
    { id: 'rtgs',   name: 'RTGS',           icon: '🏛️', utr: true        },
    { id: 'card',   name: 'Petty Card',      icon: '💳', confirm: true    },
    { id: 'pp',     name: 'Paid Personally', icon: '🙋', confirm: true    },
  ],

  vendors: [
    { id: 'simhadri',   name: 'Simhadri Steel',        cat: 'steel',     agreedRate: 72,    rateUnit: '₹/kg'    },
    { id: 'aparna',     name: 'Aparna Enterprises',    cat: 'rmc',       agreedRate: 4550,  rateUnit: '₹/M³'   },
    { id: 'jagadish',   name: 'Jagadish Materials',    cat: 'cement',    agreedRate: 350,   rateUnit: '₹/bag'   },
    { id: 'balayya',    name: 'Balayya Materials',     cat: 'materials'                                         },
    { id: 'kkumar',     name: 'K. Kumar (Mestri)',      cat: 'labour'                                            },
    { id: 'shankar',    name: 'Electrical Shankar',     cat: 'electrical'                                        },
    { id: 'vigneswara', name: 'Vigneswara Electricals', cat: 'electrical'                                        },
    { id: 'yaswanth',   name: 'Yaswanth Electricals',  cat: 'electrical'                                        },
    { id: 'thatababu',  name: 'Thathababu Plumber',     cat: 'plumbing'                                          },
    { id: 'ramarao',    name: 'JCB Ramarao',            cat: 'transport'                                         },
    { id: 'prasad',     name: 'Tractor Prasad',         cat: 'transport'                                         },
    { id: 'newtech',    name: 'Newtech Buildmart',       cat: 'materials'                                         },
    { id: 'srinu_surv', name: 'Srinu Surveyor',          cat: 'prof'                                              },
    { id: 'paparao',    name: 'Paparao Steel Design',   cat: 'prof'                                              },
    { id: 'sanjay',     name: 'Sanjay (Supervisor)',    cat: 'salary',    agreedRate: 20000, rateUnit: '₹/month' },
    { id: 'watchman1',  name: 'Watchman',               cat: 'salary',    agreedRate: 12000, rateUnit: '₹/month' },
    { id: 'madhav',     name: 'Madhav (Mediator)',      cat: 'land_med'                                          },
    { id: 'nageswarao', name: 'Vella Nageswarao',       cat: 'land_med'                                          },
    { id: 'vnageswar',  name: 'V. Nageswararao (Loan)', cat: 'loan',      agreedRate: 40000, rateUnit: '₹/month' },
  ],

  landSites: [
    { id: 'g3_site', name: 'G3 Site (Vizag)',  status: 'registered' },
    { id: 'proj2',   name: 'Project 2 Site',   status: 'registered' },
  ],

  flats: [
    { id: '101', floor:1, type:'2BHK', facing:'West', project:'G3' },
    { id: '102', floor:1, type:'3BHK', facing:'East', project:'G3', buyer:'M Nagamani',      saleValue:5350000, status:'advance'    },
    { id: '103', floor:1, type:'2BHK', facing:'East', project:'G3', buyer:'Praveen'                                                  },
    { id: '104', floor:1, type:'2BHK', facing:'East', project:'G3', buyer:'M Nagamani'                                               },
    { id: '105', floor:1, type:'3BHK', facing:'East', project:'G3', buyer:'Kattamuri Srikanth'                                       },
    { id: '106', floor:1, type:'3BHK', facing:'East', project:'G3' },
    { id: '201', floor:2, type:'2BHK', facing:'West', project:'G3' },
    { id: '202', floor:2, type:'2BHK', facing:'West', project:'G3' },
    { id: '203', floor:2, type:'2BHK', facing:'East', project:'G3', buyer:'B Prakash Rao'                                            },
    { id: '204', floor:2, type:'2BHK', facing:'East', project:'G3', buyer:'B Sridhar'                                                },
    { id: '205', floor:2, type:'3BHK', facing:'East', project:'G3', buyer:'B Srinivasa'                                              },
    { id: '206', floor:2, type:'2BHK', facing:'East', project:'G3', buyer:'G Venkataramana', saleValue:5000000, status:'registered'  },
    { id: '301', floor:3, type:'2BHK', facing:'West', project:'G3' },
    { id: '302', floor:3, type:'3BHK', facing:'West', project:'G3', buyer:'T Lalitha',       saleValue:5300000, status:'registered'  },
    { id: '303', floor:3, type:'2BHK', facing:'East', project:'G3', buyer:'Simhachalam'                                              },
    { id: '304', floor:3, type:'2BHK', facing:'East', project:'G3', buyer:'Gyanesh'                                                  },
    { id: '305', floor:3, type:'3BHK', facing:'East', project:'G3', buyer:'M Bindhu'                                                 },
    { id: '306', floor:3, type:'3BHK', facing:'East', project:'G3', buyer:'Hamid Ali',       saleValue:4400000, status:'registered'  },
    { id: '401', floor:4, type:'2BHK', facing:'West', project:'G3' },
    { id: '402', floor:4, type:'2BHK', facing:'West', project:'G3' },
    { id: '403', floor:4, type:'2BHK', facing:'East', project:'G3' },
    { id: '404', floor:4, type:'2BHK', facing:'East', project:'G3', buyer:'M Appalanaidu'                                            },
    { id: '405', floor:4, type:'3BHK', facing:'West', project:'G3', buyer:'S Arjun Reddy',   saleValue:5000000, status:'advance'    },
    { id: '406', floor:4, type:'3BHK', facing:'East', project:'G3', buyer:'Toufeeq',         saleValue:4400000, status:'registered'  },
    { id: '501', floor:5, type:'2BHK', facing:'West', project:'G3' },
    { id: '502', floor:5, type:'2BHK', facing:'West', project:'G3' },
    { id: '503', floor:5, type:'2BHK', facing:'East', project:'G3' },
    { id: '504', floor:5, type:'2BHK', facing:'East', project:'G3' },
    { id: '505', floor:5, type:'3BHK', facing:'East', project:'G3' },
    { id: '506', floor:5, type:'3BHK', facing:'East', project:'G3' },
  ],

  docTypes: [
    { id: 'patta',      name: 'Patta / Title deed',      phase: 'land'     },
    { id: 'ec',         name: 'Encumbrance Certificate', phase: 'land'     },
    { id: 'nakal',      name: 'Nakal copy',              phase: 'land'     },
    { id: 'survey_rep', name: 'Survey / GIS report',     phase: 'land'     },
    { id: 'soil_rep',   name: 'Soil test report',        phase: 'land'     },
    { id: 'land_deed',  name: 'Land registration deed',  phase: 'land'     },
    { id: 'link_doc',   name: 'Link documents',          phase: 'land'     },
    { id: 'gvmc_plan',  name: 'GVMC plan approval',      phase: 'approval' },
    { id: 'rera',       name: 'RERA certificate',        phase: 'approval' },
    { id: 'noc',        name: 'NOC',                     phase: 'approval' },
    { id: 'completion', name: 'Completion certificate',  phase: 'approval' },
    { id: 'bps',        name: 'BPS document',            phase: 'approval' },
    { id: 'sale_agr',   name: 'Sale agreement',          phase: 'sale'     },
    { id: 'reg_deed',   name: 'Registered sale deed',    phase: 'sale'     },
    { id: 'challan',    name: 'Registration challan',    phase: 'sale'     },
    { id: 'khata',      name: 'Khata transfer',          phase: 'sale'     },
    { id: 'pos_letter', name: 'Possession letter',       phase: 'sale'     },
    { id: 'bank_stmt',  name: 'Bank statement',          phase: 'finance'  },
    { id: 'mortgage',   name: 'Mortgage deed',           phase: 'finance'  },
    { id: 'gst_ret',    name: 'GST return',              phase: 'finance'  },
    { id: 'tds_cert',   name: 'TDS certificate',         phase: 'finance'  },
    { id: 'quotation',  name: 'Vendor quotation',        phase: 'vendor'   },
    { id: 'invoice',    name: 'Invoice / Bill',          phase: 'vendor'   },
    { id: 'delivery',   name: 'Delivery note',           phase: 'vendor'   },
    { id: 'site_photo', name: 'Site photo',              phase: 'general'  },
    { id: 'agreement',  name: 'Agreement / MOU',         phase: 'general'  },
    { id: 'other_doc',  name: 'Other document',          phase: 'general'  },
  ],

  milestones: [
    { id: 'site_prep',  name: 'Site preparation',        status: 'done',    budget: 180000  },
    { id: 'foundation', name: 'Foundation',              status: 'done',    budget: 2200000 },
    { id: 'slab1',      name: 'Slab 1 — Ground floor',  status: 'done',    budget: 900000  },
    { id: 'slab2',      name: 'Slab 2 — 1st floor',     status: 'done',    budget: 900000  },
    { id: 'slab3',      name: 'Slab 3 — 2nd floor',     status: 'done',    budget: 900000  },
    { id: 'slab4',      name: 'Slab 4 — 3rd floor',     status: 'done',    budget: 900000  },
    { id: 'slab5',      name: 'Slab 5 — 4th floor',     status: 'done',    budget: 900000  },
    { id: 'slab6',      name: 'Slab 6 — 5th floor',     status: 'done',    budget: 900000  },
    { id: 'brickwork',  name: 'Brickwork all floors',    status: 'active',  budget: 1200000 },
    { id: 'plastering', name: 'Plastering',              status: 'pending', budget: 600000  },
    { id: 'electrical', name: 'Electrical works',        status: 'pending', budget: 400000  },
    { id: 'plumbing',   name: 'Plumbing works',          status: 'pending', budget: 350000  },
    { id: 'tiles',      name: 'Tiles & flooring',        status: 'pending', budget: 800000  },
    { id: 'painting',   name: 'Painting',                status: 'pending', budget: 400000  },
    { id: 'handover',   name: 'Handover & registration', status: 'pending', budget: 500000  },
  ],

  budgets: {
    labour:1800000, steel:1200000, rmc:2200000, cement:800000,
    materials:400000, transport:250000, electrical:400000,
    plumbing:350000, utilities:150000, petty:100000, misc:200000,
    salary:480000, prof:250000, donation:150000,
    loan:480000, govt:1500000, press:600000, commission:300000,
    land_adv:0, land_reg:0, land_med:0, land_doc:0,
    land_tax:0, land_int:0, land_soil:0, land_misc:0,
  },

  investor: {
    totalInvestment: 37206439,
    startDate:       '2024-12-11',
    xirr_min:        8,
    xirr_target:     10,
    profitSharePct:  25,
  },
};

// ── RUNTIME HELPERS ───────────────────────────────────────────
const G3 = {
  catsForRole(role) {
    const lvl = {supervisor:0,partner:1,owner:2};
    const rl  = {all:0,partner:1,owner:2};
    return G3_CONFIG.categories.filter(c=>rl[c.roles]<=(lvl[role]??0));
  },
  cat(id)    { return G3_CONFIG.categories.find(c=>c.id===id); },
  person(id) { return G3_CONFIG.people.find(p=>p.id===id); },
  vendor(id) { return G3_CONFIG.vendors.find(v=>v.id===id); },
  flat(id)   { return G3_CONFIG.flats.find(f=>f.id===id); },
  fmt(n) {
    if(!n&&n!==0)return'—';
    const abs=Math.abs(n);
    const sign=n<0?'-':'';
    if(abs>=10000000)return sign+'₹'+(abs/10000000).toFixed(2)+'Cr';
    if(abs>=100000)  return sign+'₹'+(abs/100000).toFixed(2)+'L';
    if(abs>=1000)    return sign+'₹'+(abs/1000).toFixed(0)+'K';
    return sign+'₹'+Math.round(abs).toLocaleString('en-IN');
  },
  genRef(prefix='G3') {
    const d=new Date(),p=n=>String(n).padStart(2,'0');
    return prefix+'-'+d.getFullYear().toString().slice(2)+p(d.getMonth()+1)+p(d.getDate())+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
  },
  gpsKm(lat1,lng1,lat2,lng2) {
    const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
    const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
    return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
  },
  xirr(flows) {
    if(flows.length<2)return 0;
    let r=0.1;
    for(let i=0;i<200;i++){
      let f=0,df=0;const d0=flows[0].date;
      flows.forEach(cf=>{const t=(cf.date-d0)/(365.25*86400000);f+=cf.amount/Math.pow(1+r,t);df+=-t*cf.amount/Math.pow(1+r,t+1);});
      const nr=r-f/df;if(Math.abs(nr-r)<0.00001){r=nr;break;}r=isFinite(nr)?nr:r*1.1;
    }
    return r;
  },
  async compress(dataUrl,maxPx=800,q=0.75){
    return new Promise(res=>{
      const img=new Image();
      img.onload=()=>{
        const s=Math.min(1,maxPx/Math.max(img.width,img.height));
        const c=document.createElement('canvas');
        c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
        c.getContext('2d').drawImage(img,0,0,c.width,c.height);
        res(c.toDataURL('image/jpeg',q));
      };img.src=dataUrl;
    });
  },
  async exifDate(file){
    return new Promise(res=>{
      const rd=new FileReader();
      rd.onload=e=>{
        try{
          const v=new DataView(e.target.result);let o=2;
          while(o<v.byteLength-2){
            if(v.getUint16(o)===0xFFE1){
              const s=String.fromCharCode(...new Uint8Array(e.target.result,o,Math.min(600,v.byteLength-o)));
              const m=s.match(/(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
              if(m){const[,y,mo,d,h,mi,sc]=m;res(new Date(`${y}-${mo}-${d}T${h}:${mi}:${sc}`));return;}
            }
            o+=2+(v.getUint16(o+2)||0);
          }
        }catch(e){}
        res(null);
      };
      rd.readAsArrayBuffer(file.slice(0,65536));
    });
  },
};

Object.freeze(G3_CONFIG);
