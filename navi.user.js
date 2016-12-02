// Na'vi'ongyu
// version 0.1
// 2010-02-01
// Copyright (c) 2010, Yomìheyu
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// expanded by 'eylan na'viyä
// Further edits by Tirea Aean (02 DEC 2016)
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Na'vi'ongyu_test
// @namespace     Yomìheyu_test
// @description   replaces some words
// @include       http://forum.learnnavi.org/*
// ==/UserScript==

function navi (what,old,neww) {
    var eyaye,teylu;
    
    switch(what) {
    // really matches link -> almost clean
    case "link":    eyaye = "//a[.=\""+old+"\"]"; break;
    // if there is any button..
    case "button":  eyaye = "//input[@value=\""+old+"\"]"; break;
    // matches a lot -> carefull!
    case "text":    eyaye = "//span[contains(.,\""+old+"\")]"; break;
	
	// evtl ist für manche einträge ein bold tag oder ein <div class="smalltext"> tag nötig
	case "small":    eyaye = "//small[contains(.,\""+old+"\")]"; break;
	case "atable":    eyaye = "//td[contains(.,\""+old+"\")]"; break;
	case "span":    eyaye = "//span[contains(.,\""+old+"\")]"; break;
	case "div":    eyaye = "//div[contains(.,\""+old+"\")]"; break;
	
    default: return;
    }
    
    eyaye = document.evaluate(
        eyaye,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
    
    for (var i = 0; i < eyaye.snapshotLength; i++) {
        teylu = eyaye.snapshotItem(i);
        
        switch(what) {
        case "link":    replace(teylu,">"+old+"<",">"+neww+"<"); break;
        case "button":  replace(teylu,"value=\""+old+"\"","value=\""+neww+"\""); break;
        case "text":    replace(teylu,old,neww); break;
        
		case "small":    replace(teylu,old,neww); break;
		case "atable":    replace(teylu,old,neww); break;
		case "span":    replace(teylu,old,neww); break;
		case "div":    replace(teylu,old,neww); break;
		}
    }
}

function replace (node,old,neww) {
    node.parentNode.innerHTML = node.parentNode.innerHTML.replace(old,neww);
}

//copy-paste-templates
//navi("","","")

// global
////header
navi("text","Learn Na'vi Community","Olo' Lì'fyayä leNa'vi");
navi("link","Learn Na'vi Community","Olo' Lì'fyayä leNa'vi");
navi("text","Hello","Kaltxì ma");
navi("button","Search","Fwew");
navi("link","Show new replies to your posts.","mipa sì'eyngit sìpawmä ngeyä wìntxu.");//"since" needed
navi("link","Show unread posts since last visit.","mipa sìpawm wìntxu");
navi("text","Total time logged in:","krr nìwotx a tok fìtsengit:")
navi("text","days","a trr");
navi("text","hours","a trrvi");
navi("text","minutes","a swaw");
navi("text","News","Fmawn")//(works only partially)
////menu
navi("link","Home","Kelku");
navi("link","Help","Srung");
navi("link","Search","Fwew");
navi("link","Admin","Eyk");
navi("link","Profile","Oe");
navi("link","My Messages ","Ayupxare oeyä");//(Ay)upxare oeyä ("news" kommt auf der seite schon oft vor)
navi("link","Calendar","Tìhawl Krrä");
navi("link","Gallery","Reltseng");
navi("link","Members","Smuktu");
navi("link","Staff List","Ayeyktan");
navi("link","Logout","Hum");
////explanations
navi("atable"," Topic you have posted in"," Txele a tsengmì ngal tì'eyngit tolìng");
navi("atable"," Normal Topic"," Txele letrrtrr");
navi("atable"," Hot Topic (More than 25 replies)","Txele atsawl (pxevolawa tele)");
navi("atable"," Very Hot Topic (More than 50 replies)","Txele atsawl nìtxan (puvomuna tele)");
navi("atable"," Locked Topic"," Txele le'i'a");
navi("atable"," Sticky Topic"," Txele leyìm");
navi("atable"," Poll"," Ätxäle");

//home
////text
navi("atable","New Posts","mipa sìfpe'");
navi("atable","No New Posts","kea tìfpe' amip");
////tasks
navi("link","Mark ALL messages as read","Ziverok fra'upxaret na pum anawnìn" )
navi("text","Last","Hama");

//board page
////general
navi("text","Child Boards","ayeveng lepamreltseng");
navi("atable","Child Boards","ayeveng lepamreltseng");
navi("small","Members and","Aysmuktu sì");
navi("small","Member and","Smuktu sì");
navi("small","Guests are viewing this board","Ayfrrtu nerìn fìpamreltseng");
navi("small","Guest are viewing this board","Frrtu nerìn fìpamreltseng");
navi("atable","Pages:","Fìtsengeyä hapxì:");
navi("text","Moderators:","ayeyktan:");//not working
navi("text","Moderator:","eyktan:");//not working
////column names
navi("link","Subject","Txele");
navi("link","Started by","Sngä'iyu");
navi("link","Replies","Sì'eyng");
navi("link","Views","sìnìn");
navi("link","Last post ","hama tì'fpe'");
/////tasks
navi("link","Mark Read","ziverok na nawnìn");
navi("link","Notify","oer eykomum");
navi("link","Post new poll","ngop mipa ätxäleti");
navi("link","Send this topic","Fpe' fìtxeleti");
/////topics
navi("text","by ","ta ");
//navi("text","in ","mì ");//too many false positives
navi("text","post","tìfpe'");
navi("text","Posts","sìfpe'");
navi("small","by ","ta ");
//navi("small","in ","mì ");
navi("small","post","tìfpe'");
navi("small","Posts","sìfpe'");

navi("atable","Moderators:","ayeyktan:");
navi("atable","Moderator:","eyktan:");

// topic page
////tasks
//////general
navi("link","Reply","'Eyng");
navi("link","Mark unread","Zerok na ke nawnìn");
navi("link","New Topic","mipa txele");
navi("link","Print","Rel si");//inconclusive
navi("link","Add poll","Sung ätxälet");
///////own topic
navi("link","Remove Topic","Ska'a fìtxeleti");
navi("link","Lock topic","fìtxeleri tstu si");
////heading
navi("atable","Author","Ngopyu");
navi("atable","Topics","aytele");
navi("atable","Topic","Txele");
navi("atable","Read","Nawnìn");
////bottom
navi("button","go","kä");
navi("text","Jump to","Spä ne");
navi("link","next »","hay »");//(not working)
navi("link","« previous","« ham");//(not working)

//Posts
navi("link","Quote","Leyn");
navi("link","Modify","Leykatem");
navi("link","Remove","Ska'a");
navi("text","Reply #","tì'eyng #");//(does not work)
navi("text","Today","fìtrr");//(works only partially(in other positions))
//navi("text"," at "," ro ");//(works only partially(in other positions)) / ro is only locative
navi("span","Posts:","Aysìfpe':");//does not work
navi("link","Report to moderator","fpe' eyktanur");
navi("link","Logged","zawnong");


////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially////Post Avatar
navi("div","Karma:","Meoauniaea:");//partially
navi("link","[applaud]","[irayo si]");
navi("link","[smite]","[kurakx]");
//navi("div","Online","Txen");//not working
//navi("div","Offline","Herahaw");//not working
navi("div","Posts:","Sìfpe':");//partially

//Write
navi("button","Post","Fpe'");
navi("button","Preview","Fmetok");
navi("button","Save","Zong");

//board renaming
navi("link","Website-Related","Teri Olo'");
navi("link","Website Info","Tìomum Olo'ä");
navi("link","News","Fmawn");
navi("text","Suggestions / Ideas","Aysäfpìl");
navi("link","Introductions","Plltxe san Kaltxì");
navi("link","Events","Aysìlen");
navi("link","Meetup","Ultxa si");
navi("link","Classifieds","Ayuti tel fu tìng");
navi("link","Learn Na'vi","Nume lì'fyati leNa'vi");
navi("link","Community Projects","Sìkangkemvi Olo'ä");
navi("link","LearnNavi Community","Olo' Lì'fyayä leNa'vi");
navi("link","International / Multilingual","Nume fa Lahea Aylì'fya");
navi("link","Beginners","Aysngä'iyu");
navi("link","Intermediate","Nume nì'ul");
//Na'vi nì'aw
navi("link","Language updates","Lì'fyayä ayfmawn teri sìlatelm");
navi("link","Audio","Ayu teri pam");
navi("link","Project NgayNume","Tìkangkemvi a NgayNume");
navi("link","Na'vi Customs and Culture","Ayfya'o Na'viyä");
navi("link","General Projects / Resources","Aysìkangkemvi");
navi("link","Learning Resources","Aysänumvi");
navi("link","Learn Na'vi (Multilingual/International)","Lahe aylì'fya");
//language-names are from masempul.org
navi("link","中文 (Chinese)","中文 (nìNihongo)");
navi("link","Česky (Czech)","Česky (nìTseskxì)");
navi("link","Dansk (Danish)","Dansk (Danish)");//todo
navi("link","Deutsch (German)","Deutsch (nìToìtse)");
navi("link","Nederlands (Dutch)","Nederlands (nìNeterlanzì)");
navi("link","Español (Spanish)","Español (nìEspanyol)");
navi("link","Esperanto (Esperanto)","Esperanto (Esperanto)");//todo
navi("link","Français (French)","Français (nìFransey)");
navi("link","Magyarul (Hungarian)","Magyarul (Hungarian)");//todo
navi("link","Italiano (Italian)","Italiano (nìItaliano)");
navi("link","日本語 (Japanese)","日本語 (nìTsongWen)");
navi("link","Polski (Polish)","Polski (nìPolskxi)");
navi("link","Português (Portuguese)","Português (nìPortungesì)");
navi("link","Русский (Russian)","Русский (nìRuski)");
navi("link","Suomi (Finnish)","Suomi (Finnish)");//todo
navi("link","Svenska (Swedish)","Svenska (nìSwenskxa)");
navi("link","Türkçe (Turkish)","Türkçe (Turkish)");//todo
navi("link","tlhIngan Hol (Klingon)","tlhIngan Hol (Klingon)");//todo
navi("link","Avatar","Uniltìrantokx");
navi("link","The Games","Ayuvan mì eltu lefngap");
navi("link","The Games","Ayuvan mì eltu lefngap");
navi("link","Off-Topic","Wrrpa txele");
navi("link","Pictures of your Cat","ayrel ayngeyä kätä");
navi("link","Spam","Sngel");
////german boards
navi("link","Vorstellungen","Plltxe Kaltxì!");
navi("link","Na'vi Lernen","Nume lì'fyati leNa'vi");
navi("link","Avatar (Deutsch)","Uniltìrantokx (leToitse)");
navi("link","Off-topic","Wrrpa txele");
navi("link","Roleplay","Uvan leronsem");
//navi("text","Off-topic","lahea ayu");
