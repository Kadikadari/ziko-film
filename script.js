// بيانات الأفلام 
const films = { 
    arabic: [ 
        { title: " البداية ", image: "images/البداية.jpg", url: "https://ok.ru/videoembed/1718394489346" }, 
        { title: " Jazeerat ", image: "images/Jazeerat.jpg", url: "https://ok.ru/videoembed/2150438079177" },
         { title: " كفرون ", image: "images/كفرون.jpg", url: "https://ok.ru/videoembed/1718394489346" },
         { title: " الحدود ", image: "images/الحدود.jpg", url: "https://ok.ru/videoembed/33211419271" },
        { title: " طلعت  ", image: "images/طلعت.jpg", url: "https://ok.ru/videoembed/3705485920969" },
        { title: " نوتردام ", image: "images/نوتردام.jpg", url: "https://ok.ru/videoembed/3705057774281" },
        { title: " ياصحبي ", image: "images/ياصحبي.jpg", url: "https://ok.ru/videoembed/2152643693257" },
        { title: " صايع ", image: "images/صايع.jpg", url: "https://ok.ru/videoembed/2152644086473" },
        { title: " ابوالنيل ", image: "images/ابوالنيل.jpg", url: "https://ok.ru/videoembed/2152644807369" },
        { title: " وقفه ", image: "images/وقفه.jpg", url: "https://ok.ru/videoembed/3705485724361" },
        { title: " السعد ", image: "images/السعد.jpg", url: "https://ok.ru/videoembed/2150439586505" },
        { title: " للماذون ", image: "images/للماذون.jpg", url: "https://ok.ru/videoembed/3705057970889" },
        { title: " محترم ", image: "images/محترم.jpg", url: "https://ok.ru/videoembed/2152411302601" },
        { title: " مرجان ", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/2152411171529" },
        { title: " حسين ", image: "images/حسين.jpg", url: "https://ok.ru/videoembed/2152411105993" },
        { title: " كنغر ", image: "images/كنغر.jpg", url: "https://ok.ru/videoembed/2150438669001" },
        { title: " وشهير ", image: "images/وشهير.jpg", url: "https://ok.ru/videoembed/2152643627721" },
        { title: " صناعي ", image: "images/صناعي.jpg", url: "https://ok.ru/videoembed/2152411368137" },
        { title: " لخمه ", image: "images/لخمه.jpg", url: "https://ok.ru/videoembed/2152410778313" },
        { title: " كركر ", image: "images/كركر.jpg", url: "https://ok.ru/videoembed/2150439062217" },
        { title: " معالي ", image: "images/معالي.jpg", url: "https://ok.ru/videoembed/2152410712777" },
        { title: " عمارة ", image: "images/عمارة.jpg", url: "https://ok.ru/videoembed/5044638845519" },
         { title: " كلنا لصوص ", image: "images/كلنا لصوص.jpg", url: "https://ok.ru/videoembed/1019290192500" },
        { title: " الابيض  ", image: "images/الابيض.jpg", url: "https://ok.ru/videoembed/33248905863" },
        { title: " العربى  ", image: "images/العربى.jpg", url: "https://ok.ru/videoembed/33229310599" },
        { title: " الراعي  ", image: "images/الراعي.jpg", url: "https://ok.ru/videoembed/33211484807" },
        { title: " السلم والثعبان ", image: "images/السلم والثعبان.jpg", url: "https://ok.ru/videoembed/33248971399" },
        { title: " فوضى ", image: "images/فوضى.jpg", url: "https://ok.ru/videoembed/33190578823" },
        { title: " نمس  ", image: "images/نمس.jpg", url: "https://ok.ru/videoembed/33139198599" },
        { title: " مناحى ", image: "images/مناحى.jpg", url: "https://ok.ru/videoembed/33168034439" },
        { title: " صح النوم ", image: "images/صح النوم.jpg", url: "https://ok.ru/videoembed/33439025799" },
         { title: " المتسول ", image: "images/المتسول.jpg", url: "https://ok.ru/videoembed/33413597831" },
        { title: " المشبوه  ", image: "images/المشبوه.jpg", url: "https://ok.ru/videoembed/33451608711" },
        { title: " ابن عز ", image: "images/ابن عز.jpg", url: "https://ok.ru/videoembed/33280297607" },
        { title: " ارض الخوف ", image: "images/ارض الخوف.jpg", url: "https://ok.ru/videoembed/33242221191" },
        { title: " واربع  ", image: "images/واربع.jpg", url: "https://ok.ru/videoembed/33280428679" },
        { title: " إجرام ", image: "images/إجرام.jpg", url: "https://ok.ru/videoembed/33185008263" },
        { title: " خلعا ", image: "images/خلعا.jpg", url: "https://ok.ru/videoembed/33274727047" },
        { title: " عقلي ", image: "images/عقلي.jpg", url: "https://ok.ru/videoembed/33421265543" },
        { title: " المنحوس ", image: "images/المنحوس.jpg", url: "https://ok.ru/videoembed/33446627975" },
        { title: " المدابغ ", image: "images/المدابغ.jpg", url: "https://ok.ru/videoembed/33216596615" },
        { title: " البلح ", image: "images/البلح.jpg", url: "https://ok.ru/videoembed/33139264135" },
        { title: " وعادت ", image: "images/وعادت.jpg", url: "https://ok.ru/videoembed/33178061447" }, 
        { title: " الشمس ", image: "images/الشمس.jpg", url: "https://ok.ru/videoembed/33171180167" },
         { title: " وداعا للامس ", image: "images/وداعا للامس.jpg", url: "https://ok.ru/videoembed/33177995911" },
         { title: " كابتشينو ", image: "images/كابتشينو.jpg", url: "https://ok.ru/videoembed/33134283399" },
        { title: " ولصق  ", image: "images/ولصق.jpg", url: "https://ok.ru/videoembed/33171114631" },
        { title: " قشطه ", image: "images/قشطه.jpg", url: "https://ok.ru/videoembed/33139133063" },
        { title: " غلطة ", image: "images/غلطة.jpg", url: "https://ok.ru/videoembed/33145817735" },
        { title: " محطة مصر ", image: "images/محطة مصر.jpg", url: "https://ok.ru/videoembed/33145883271" },
        { title: " عيب يا لولو ", image: "images/عيب يا لولو.jpg", url: "https://ok.ru/videoembed/33171049095" },
        { title: " عيال ", image: "images/عيال.jpg", url: "https://ok.ru/videoembed/33151715975" },
        { title: " غبي ", image: "images/غبي.jpg", url: "https://ok.ru/videoembed/33202768519" },
        { title: " أطاليا ", image: "images/أطاليا.jpg", url: "https://ok.ru/videoembed/33145555591" },
        { title: " صائد ", image: "images/صائد.jpg", url: "https://ok.ru/videoembed/33459145351" },
        { title: " من شاف ", image: "images/من شاف.jpg", url: "https://ok.ru/videoembed/33185073799" },
        { title: " إستاكوزا ", image: "images/إستاكوزا.jpg", url: "https://ok.ru/videoembed/33224002183" },
        { title: " المجهول ", image: "images/المجهول.jpg", url: "https://ok.ru/videoembed/33446562439" },
        { title: " ابن خالتي ", image: "images/ابن خالتي.jpg", url: "https://ok.ru/videoembed/7193744509535" }, 
        { title: " عادل مش عادل ", image: "images/عادل مش عادل.jpg", url: "https://ok.ru/videoembed/8550278630014" },
         { title: " Rahba ", image: "images/Rahba.jpg", url: "https://ok.ru/videoembed/6938695240287" },
         { title: " المعزة ", image: "images/المعزة.jpg", url: "https://ok.ru/videoembed/8554678389374" },
        { title: " سنه اولى  ", image: "images/سنه اولى.jpg", url: "https://ok.ru/videoembed/7124226869855" },
        { title: " الكنز2 ", image: "images/الكنز2.jpg", url: "https://ok.ru/videoembed/2095232518837" },
        { title: " محروس ", image: "images/محروس.jpg", url: "https://ok.ru/videoembed/3059989940895" },
        { title: " مغاوري ", image: "images/مغاوري.jpg", url: "https://ok.ru/videoembed/3810725792415" },
        { title: " المجانين ", image: "images/المجانين.jpg", url: "https://ok.ru/videoembed/1463156148957" },
        { title: " الانتقام لرجب ", image: "images/الانتقام لرجب.jpg", url: "https://ok.ru/videoembed/1870883982045" },
        { title: " ستوب ", image: "images/ستوب.jpg", url: "https://ok.ru/videoembed/3685169171103" },
        { title: " البريد ", image: "images/البريد.jpg", url: "https://ok.ru/videoembed/3830030928543" },
        { title: " ناقص واحد ", image: "images/ناقص واحد.jpg", url: "https://ok.ru/videoembed/1647054031581" },
        { title: " خريستو ", image: "images/خريستو.jpg", url: "https://ok.ru/videoembed/1992463551157" },
        { title: " Sharbia ", image: "images/Sharbia.jpg", url: "https://ok.ru/videoembed/7063342811743" },
        { title: " Shahd ", image: "images/Shahd.jpg", url: "https://ok.ru/videoembed/6944117099103" },
        { title: " Mo5amarat ", image: "images/Mo5amarat.jpg", url: "https://ok.ru/videoembed/6554524125791" },
        { title: "  حاحا وتفاحة ", image: "images/حاحا وتفاحة.jpg", url: "https://ok.ru/videoembed/33151060615" }, 
        { title: " هنا وسرور ", image: "images/هنا وسرور.jpg", url: "https://ok.ru/videoembed/1228214045220" },
         { title: " رغد متوحشة ", image: "images/رغد متوحشة.jpg", url: "https://ok.ru/videoembed/1083394886180" },
         { title: " بني ادم ", image: "images/بني ادم.jpg", url: "https://ok.ru/videoembed/1225603090980" },
        { title: " كلبي دليلي  ", image: "images/كلبي دليلي.jpg", url: "https://ok.ru/videoembed/1228163385892" },
        { title: " جوبا ", image: "images/جوبا.jpg", url: "https://ok.ru/videoembed/33189857927" },
        { title: " تيتو ", image: "images/تيتو.jpg", url: "https://ok.ru/videoembed/33133693575" },
        { title: " طلق.صناعي ", image: "images/طلق.صناعي.jpg", url: "https://ok.ru/videoembed/630939847204" },
        { title: " بوحة ", image: "images/بوحة.jpg", url: "https://ok.ru/videoembed/33164626567" },
        { title: " الحنش ", image: "images/الحنش.jpg", url: "https://ok.ru/videoembed/33177275015" },
        { title: " عبود على ", image: "images/عبود على.jpg", url: "https://ok.ru/videoembed/33177209479" },
        { title: " خارج عن القانون ", image: "images/خارج عن القانون.jpg", url: "https://ok.ru/videoembed/33158204039" },
        { title: " يارب ولد ", image: "images/يارب ولد.jpg", url: "https://ok.ru/videoembed/33161611911" },
        { title: " واحد من الناس ", image: "images/واحد من الناس.jpg", url: "https://ok.ru/videoembed/33184025223" },
        { title: " رجب ", image: "images/رجب.jpg", url: "https://ok.ru/videoembed/33133496967" },
        { title: "  بنت فاميليا ", image: "images/بنت فاميليا.jpg", url: "https://ok.ru/videoembed/33177406087" },
        { title: " سمك لبن تمر هندى ", image: "images/سمك لبن تمر هندى.jpg", url: "https://ok.ru/videoembed/33148897927" },
         { title: " كلمني ", image: "images/كلمني.jpg", url: "https://ok.ru/videoembed/2150439455433" }
       
    ], 
    foreign: [ 
        { title: "blu  ", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" }, 
         { title: " gran  ", image: "images/gran.jpg", url: "https://ok.ru/videoembed/7085340166806" },
        { title: " pure lucke ", image: "images/pure.jpg", url: "https://ok.ru/videoembed/6106193922801" },
        { title: " shawshank ", image: "images/shawshenk.jpg", url: "https://www.ok.ru/videoembed/8281347918517" },
        { title: " cast away ", image: "images/cast.jpg", url: "https://ok.ru/videoembed/4342255258133" },
         { title: "a sunburnt christmas  ", image: "images/a sunburnt christmas.jpg", url: "https://www.ok.ru/videoembed/8155275397813" }, 
        { title: " trumman", image: "images/trumman.jpg", url: "https://www.ok.ru/videoembed/8281369283253" },
        { title: " blue miraclr ", image: "images/miraclr.jpg", url: "https://www.ok.ru/videoembed/8128203328181" },
        { title: " survivants ", image: "images/survivants.jpg", url: "https://www.ok.ru/videoembed/8179675695797" },
        { title: " true spirit ", image: "images/true spirit.jpg", url: "https://www.ok.ru/videoembed/7983728364213" },
        { title: " rango ", image: "images/rango.jpg", url: "https://www.ok.ru/videoembed/8298574187189" },
          { title: " sunnnshine  ", image: "images/sunnnshine.jpg", url: "https://ok.ru/videoembed/6954280290966" },
         { title: " Management ", image: "images/Management.jpg", url: "https://ok.ru/videoembed/5577057307255" },
         { title: " Showtime  ", image: "images/Showtime.jpg", url: "https://ok.ru/videoembed/1942340242046" },
        { title: " the mountain ", image: "images/the mountain.jpg", url: "https://www.ok.ru/videoembed/2524987787939" },
        { title: "free gaye  ", image: "images/free gaye.jpg", url: "https://www.ok.ru/videoembed/8103229524661" }, 
        { title: " Bookworm", image: "images/Bookworm.jpg", url: "https://ok.ru/videoembed/8965706222187" },
        { title: " Doctor Dolittle ", image: "images/Doctor Dolittle.jpg", url: "https://ok.ru/videoembed/1264989112948" },
        { title: " Meet Dave ", image: "images/Meet Dave.jpg", url: "https://ok.ru/videoembed/1264992979572" },
        { title: "dear dictator  ", image: "images/dear dictator.jpg", url: "https://ok.ru/videoembed/1872670165631" }, 
        { title: " so much love to give ", image: "images/so much love to give.jpg", url: "https://ok.ru/videoembed/1840947464773" },
        { title: " spanglish ", image: "images/spanglish.jpg", url: "https://games.ok.ru/videoembed/1964927355518" },
        { title: " the brother ", image: "images/the brother.jpg", url: "https://mega.nz/embed/0M52yTra#9oaURsSXiZtVgLw_sZw5BndW3YVsRcqQ8wZVTBD-bgE" },
         { title: "The Martian   ", image: "images/The Martian.jpg", url: "https://ok.ru/videoembed/8050242095857" }, 
        { title: " Nothing   ", image: "images/Nothing.jpg", url: "https://ok.ru/videoembed/1555294456322" },
        { title: " gulivver ", image: "images/gulivver.jpg", url: "https://ok.ru/videoembed/1935460797148" },
        { title: " life  ", image: "images/life.jpg", url: "https://ok.ru/videoembed/1259723229860" },
         { title: " dora   ", image: "images/dora.jpg", url: "https://ok.ru/videoembed/1225607023140" },
        { title: " Rebound ", image: "images/Rebound.jpg", url: "https://ok.ru/videoembed/1555295111682" },
        { title: " everything   ", image: "images/everything.jpg", url: "https://ok.ru/videoembed/480547965544" },
       { title: "Scorpion  ", image: "images/Scorpion.jpg", url: "https://ok.ru/videoembed/8887516727915" }, 
         { title: " Mummy ", image: "images/Mummy.jpg", url: "https://ok.ru/videoembed/8886865169003" },
        { title: " Mummy Returns ", image: "images/Mummy Returns.jpg", url: "https://ok.ru/videoembed/8887470459499" },
        { title: " The Mummy ", image: "images/The Mummy.jpg", url: "https://ok.ru/videoembed/8886834891371" },
        { title: " Salome ", image: "images/Salome.jpg", url: "https://ok.ru/videoembed/8886591556203" },
         { title: "Love ", image: "images/Love.jpg", url: "https://ok.ru/videoembed/8886414281323" }, 
         { title: " Bridget ", image: "images/Bridget.jpg", url: "https://ok.ru/videoembed/8886321678955" },
        { title: "Trouble  ", image: "images/Trouble.jpg", url: "https://ok.ru/videoembed/8878995802731" },
        { title: " HollyBlood ", image: "images/HollyBlood.jpg", url: "https://ok.ru/videoembed/8878010796651" },
        { title: "the Road", image: "images/the Road.jpg", url: "https://ok.ru/videoembed/8872583563883" },
         { title: "Deadly", image: "images/Deadly.jpg", url: "https://ok.ru/videoembed/8872537361003" }, 
         { title: "Mamma", image: "images/Mamma.jpg", url: "https://ok.ru/videoembed/8868824353387" },
        { title: "The.4.30", image: "images/The.4.30.jpg", url: "https://ok.ru/videoembed/8867243035243" },
        { title: " Saragossa ", image: "images/Saragossa.jpg", url: "https://ok.ru/videoembed/8863270111851" },
        { title: "Heaven", image: "images/Heaven.jpg", url: "https://ok.ru/videoembed/8862540958315" },
        { title: "A Pain  ", image: "images/A Pain.jpg", url: "https://ok.ru/videoembed/8862273768043" }, 
         { title: " My.Sons", image: "images/My.Sons.jpg", url: "https://ok.ru/videoembed/8862040459883" },
        { title: "Bonds", image: "images/Bonds.jpg", url: "https://ok.ru/videoembed/8861907356267" },
        { title: " Amber ", image: "images/Amber.jpg", url: "https://ok.ru/videoembed/8861880617579" },
        { title: "Paul ", image: "images/Paul.jpg", url: "https://ok.ru/videoembed/8857520835179" },
         { title: "Flubber ", image: "images/Flubber.jpg", url: "https://ok.ru/videoembed/8851857017451" }, 
        { title: " Burbs", image: "images/Burbs.jpg", url: "https://ok.ru/videoembed/8852317014635" },
        { title: " أجنبي ", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" } 
    ], 
    turkish: [ 
        { title: "Anadolu", image: "images/Anadolu.jpg", url: "https://ok.ru/videoembed/1227028105764" },
         { title: "انت منزلي", image: "images/انت منزلي.jpg", url: "https://ok.ru/videoembed/1091359345188" }, 
         { title: "أيلا ", image: "images/أيلا.jpg", url: "https://ok.ru/videoembed/1091359476260" },
         { title: "ترقصين ", image: "images/ترقصين.jpg", url: "https://ok.ru/videoembed/1091359083044" },
         { title: "البنت بنتنا ", image: "images/البنت بنتنا.jpg", url: "https://ok.ru/videoembed/1091359279652" }, 
         { title: "اللطيف ", image: "images/اللطيف.jpg", url: "https://ok.ru/videoembed/1091359017508" },
         { title: "ازرق ازرق ", image: "images/ازرق ازرق.jpg", url: "https://ok.ru/videoembed/12270634292" },
         { title: "حكايتنا ", image: "images/حكايتنا.jpg", url: "https://ok.ru/videoembed/2980120824370" }, 
         { title: "فرصة ثانية ", image: "images/فرصة ثانية.jpg", url: "https://ok.ru/videoembed/2980121741874" },
         { title: " تفاحات ", image: "images/تفاحات.jpg", url: "https://ok.ru/videoembed/574420814340" },
         { title: "سبات ", image: "images/سبات.jpg", url: "https://ok.ru/videoembed/896001641102" }, 
         { title: "فاتح ", image: "images/فاتح.jpg", url: "https://ok.ru/videoembed/2200618470012" },
        { title: " رحلة ", image: "images/رحلة.jpg", url: "https://ok.ru/videoembed/35011824268" } 
    ], 
    indian: [ 
        { title: "Pad Man  ", image: "images/Pad Man.jpg", url: "https://www.ok.ru/videoembed/1116129790703" }, 
         { title: "Dunki  ", image: "images/Dunki.jpg", url: "https://ok.ru/videoembed/10123617766037" }, 
         { title: "Anokhi  ", image: "images/Anokhi.jpg", url: "https://ok.ru/videoembed/9601974667883" }, 
         { title: "Rebel  ", image: "images/Rebel.jpg", url: "https://ok.ru/videoembed/9602752514667" }, 
         { title: "Joshua  ", image: "images/Joshua.jpg", url: "https://ok.ru/videoembed/9602129726059" }, 
         { title: "Bhairavakona  ", image: "images/Bhairavakona.jpg", url: "https://ok.ru/video/22348" }, 
         { title: "The.Goat.Life.2024  ", image: "images/The.Goat.Life.2024.jpg", url: "https://ok.ru/videoembed/7098530335327" }, 
         { title: "Kabali   ", image: "images/Kabali.jpg", url: "https://ok.ru/videoembed/9684984924779" }, 
         { title: "Khiladi   ", image: "images/Khiladi.jpg", url: "https://ok.ru/videoembed/9682624645739" }, 
         { title: "Pyaari  ", image: "images/Pyaari.jpg", url: "https://ok.ru/videoembed/9545487354475" }, 
         { title: "Nanna  ", image: "images/Nanna.jpg", url: "https://ok.ru/videoembed/9545239759467" }, 
         { title: "Hanuman  ", image: "images/Hanuman.jpg", url: "https://ok.ru/videoembed/9545069693547" }, 
         { title: "Maaya  ", image: "images/Maaya.jpg", url: "https://ok.ru/videoembed/9673437743723" }, 
         { title: "Meiyazhagan   ", image: "images/Meiyazhagan.jpg", url: "https://ok.ru/videoembed/8441740921470" }, 
        { title: "Saindhav  ", image: "images/Saindhav.jpg", url: "https://ok.ru/videoembed/10245762779755" } 
    ], 
    asian: [ 
         { title: "Summer   ", image: "images/Summer.jpg", url: "https://ok.ru/videoembed/10339495578219" },
        { title: "pawn   ", image: "images/pawn.jpg", url: "https://www.ok.ru/videoembed/8137393638069" }, 
        { title: "Sleeping ", image: "images/Sleeping.jpg", url: "https://ok.ru/videoembed/10017893583467" }, 
         { title: "pawn   ", image: "images/pawn.jpg", url: "https://www.ok.ru/videoembed/8137393638069" }, 
        { title: "Yoko ", image: "images/Yoko.jpg", url: "https://ok.ru/videoembed/10018058078827" },
        { title: "Pilot   ", image: "images/Pilot.jpg", url: "https://ok.ru/videoembed/10016805423723" },
        { title: "  April", image: "images/April.jpg", url: "https://ok.ru/videoembed/10015339514475" },
        { title: "  Ice bar", image: "images/Ice bar.jpg", url: "http://ok.ru/videoembed/2953473362489" },
        { title: "  Seconds  ", image: "images/Seconds.jpg", url: "https://ok.ru/videoembed/1901642386009" },
        { title: "After   ", image: "images/After.jpg", url: "https://ok.ru/videoembed/1898796157529" },
        { title: " Sukdulan ", image: "images/Sukdulan.jpg", url: "https://ok.ru/videoembed/10207481891435" },
        { title: "Karakai   ", image: "images/Karakai.jpg", url: "https://ok.ru/videoembed/10339519105643" },
        { title: " Lov-and ", image: "images/Lov-and.jpg", url: "https://ok.ru/videoembed/8898080475755" },
          { title: " Chihiro ", image: "images/Chihiro.jpg", url: "https://ok.ru/videoembed/6382795360989" },
         { title: " Love  ", image: "images/Love.jpg", url: "https://ok.ru/videoembed/10339550693995" } 
    ], 
    series: [ 
        { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نورخالد.html" }, 
         { title: " الخربه  ", image: "images/الخربه.jpg", url: " الخربة.html" },
         { title: "بقعه ضوء  ", image: "images/بقعة.jpg", url: "بقعة ضوء .html" },
          { title: "خمس نجوم  ", image: "images/خمس نجوم.jpg", url: "5نجوم.html" },
         { title: "الواق  ", image: "images/الواق.jpg", url: "الواق واق.html" },
        { title: " ذئاب الليل  ", image: "images/ذئاب الليل.jpg", url: "ذئاب الليل.html" },
          { title: " غرباء  ", image: "images/غرباء.jpg", url: " غرباء.html" },
        { title: " راس الغول  ", image: "images/راس الغول.jpg", url: " راس الغول.html" },
        { title: "  الصعلوك  ", image: "images/الصعلوك.jpg", url: " الصعلوك.html" },
        { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عوده غوار.html" } 
    ],
    home: [ // أفلام خاصة بالصفحة الرئيسية
        { title: "فيلم مميز 1", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "pawn   ", image: "images/pawn.jpg", url: "https://www.ok.ru/videoembed/8137393638069" }, 
         { title: " gran  ", image: "images/gran.jpg", url: "https://ok.ru/videoembed/7085340166806" },
         { title: " Chihiro ", image: "images/Chihiro.jpg", url: "https://ok.ru/videoembed/6382795360989" },
         { title: " Finch ", image: "images/Finch.jpg", url: "https://ok.ru/videoembed/8842043263677" },
         { title: " sunnnshine  ", image: "images/sunnnshine.jpg", url: "https://ok.ru/videoembed/6954280290966" },
         { title: " Management ", image: "images/Management.jpg", url: "https://ok.ru/videoembed/5577057307255" },
         { title: " Showtime  ", image: "images/Showtime.jpg", url: "https://ok.ru/videoembed/1942340242046" },
        { title: "فيلم مميز 2", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" },
         { title: "Jules   ", image: "images/Jules.jpg", url: "https://ok.ru/videoembed/10399934646891" } ,
        { title: "فيلم مميز 3", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" }
    ]
}; 

// عرض الأفلام حسب التصنيف
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = "";

    if (!films[category]) {
        console.error("التصنيف غير موجود:", category);
        return;
    }

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = getCategoryTitle(category);
    container.appendChild(categoryTitle);

    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

  // الحصول على اسم التصنيف المناسب
function getCategoryTitle(category) {
    switch (category) {
      case 'arabic': return 'أفلام عربي';
        case 'foreign': return 'أفلام أجنبي';
        case 'turkish': return 'أفلام تركي';
        case 'indian': return 'أفلام هندي';
        case 'asian': return 'أفلام أسيوي';
        case 'series': return 'مسلسلات';
        case 'home': return 'الرئيسية';
        default: return '';
    }
}

// فتح صفحة تشغيل الفيديو
function openVideoPage(videoUrl) {
    if (videoUrl) {
        if (videoUrl.endsWith('.html')) {
            // إذا كان الرابط ينتهي بـ .html، افتحه كصفحة HTML
            window.location.href = videoUrl;
        } else {
            // إذا كان رابط فيديو، افتحه باستخدام video.html
            window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
        }
    } else {
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}

// عند تحميل الصفحة، عرض الأفلام الخاصة بـ "الرئيسية"
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // عرض الأفلام الخاصة بالرئيسية عند تحميل الصفحة
});
