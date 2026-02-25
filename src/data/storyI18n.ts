/**
 * English translations for story content (default is Spanish).
 * StoryPage picks the correct translation based on nativeLang.
 */

export interface StoryI18nEntry {
  subtitle: string;
  chapters: { title: string }[];
  scenes: Record<string, {
    setting: string;
    lesson: string;
    quizQ: string;
    quizOpts: string[];
    dialogueTr: string[]; // one per dialogue line, '' if narrator with no tr
  }>;
}

export const STORY_I18N_EN: Record<string, StoryI18nEntry> = {
  jp: {
    subtitle: 'A young Mexican discovering Japan',
    chapters: [{ title: 'Arrival in Tokyo' }],
    scenes: {
      'jp-s1-1': {
        setting: 'Kenji just landed at Narita. It\'s his first day in Japan.',
        lesson: 'すみません is used to politely get someone\'s attention. まっすぐ means "straight ahead".',
        quizQ: 'What does Kenji ask the staff?',
        quizOpts: ['Where the bathroom is', 'Where the station is', 'What their name is', 'What time it is'],
        dialogueTr: ['Kenji exits the plane and looks for the exit.', 'Hello! Welcome!', 'Hello. Excuse me, where is the station?', 'Go straight, please.', 'Thank you very much!'],
      },
      'jp-s1-2': {
        setting: 'Kenji enters a small ramen restaurant near the station.',
        lesson: 'いらっしゃいませ is the welcome greeting used in shops and restaurants. ください = please (give me).',
        quizQ: 'What does Kenji order?',
        quizOpts: ['Sushi', 'Ramen', 'Tempura', 'Udon'],
        dialogueTr: ['Kenji is hungry and sees a restaurant.', 'Welcome!', 'Ramen, please.', 'Would you like water too?', 'Yes, please.'],
      },
      'jp-s1-3': {
        setting: 'Kenji takes the train from Narita to central Tokyo.',
        lesson: 'なんばんせん = which line? なんぷん = how many minutes? やく = approximately.',
        quizQ: 'How long does the trip to Shinjuku take?',
        quizOpts: ['30 minutes', '45 minutes', '1 hour', '2 hours'],
        dialogueTr: ['Kenji looks for his platform at the station.', 'Excuse me, which line goes to Shinjuku?', 'Shinjuku is line 3.', 'Thank you. How many minutes does it take?', 'About one hour.'],
      },
      'jp-s1-4': {
        setting: 'Kenji arrives at his hotel in Shinjuku and checks in.',
        lesson: 'ご予約 = reservation (honorific). 号室 = room number. 鍵 = key. どうぞ = here you go.',
        quizQ: 'What time is check-out?',
        quizOpts: ['8:00', '9:00', '10:00', '11:00'],
        dialogueTr: ['Kenji enters the hotel lobby.', 'Welcome. What name is the reservation under?', 'I\'m Kenji. I came from Mexico.', 'Yes, room 305. Here is your key.', 'What time is check-out?', 'At 10 o\'clock.'],
      },
      'jp-s1-5': {
        setting: 'Kenji goes to a konbini (convenience store) at night.',
        lesson: 'おにぎり = rice ball. おつり = change (money). 円 = yen. At konbini you can also pay bills.',
        quizQ: 'How much do the onigiri and tea cost?',
        quizOpts: ['250 yen', '350 yen', '450 yen', '550 yen'],
        dialogueTr: ['Kenji needs to buy some things.', 'Welcome!', 'An onigiri and a tea, please.', 'That\'s 350 yen.', 'Here, with 1000 yen, please.', 'Your change is 650 yen. Thank you!'],
      },
    },
  },
  fr: {
    subtitle: 'A young woman discovering France',
    chapters: [{ title: 'Arrival in Paris' }],
    scenes: {
      'fr-s1-1': {
        setting: 'Léa arrives at Charles de Gaulle airport.',
        lesson: '"Excusez-moi" is the polite way to get attention. "Tout droit" means straight ahead.',
        quizQ: 'What is Léa looking for?',
        quizOpts: ['A taxi', 'The metro', 'A hotel', 'A café'],
        dialogueTr: ['Léa exits the plane and looks for the exit.', 'Hello! Welcome to Paris!', 'Hello! Excuse me, where is the metro?', 'Go straight, then left.', 'Thank you very much!'],
      },
      'fr-s1-2': {
        setting: 'Léa sits in a Parisian café.',
        lesson: '"S\'il vous plaît" is essential. "C\'est combien" to ask the price.',
        quizQ: 'What does Léa order?',
        quizOpts: ['Tea and bread', 'Coffee and croissant', 'Wine and cheese', 'Water and salad'],
        dialogueTr: ['Léa enters a typical Parisian café.', 'Hello! What would you like?', 'A coffee and a croissant, please.', 'Right away!', 'How much is it?', 'Four euros fifty.'],
      },
      'fr-s1-3': {
        setting: 'Léa strolls through Montmartre looking for her accommodation.',
        lesson: '"Je cherche" = I\'m looking for. "À droite/gauche" = right/left. "À pied" = on foot.',
        quizQ: 'How long does it take to get there?',
        quizOpts: ['2 minutes', '5 minutes', '10 minutes', '15 minutes'],
        dialogueTr: ['Léa walks through the streets of Montmartre.', 'Excuse me, I\'m looking for rue des Abbesses.', 'It\'s the second street on the right.', 'Is it far from here?', 'No, it\'s five minutes on foot.'],
      },
      'fr-s1-4': {
        setting: 'Léa goes to a typical French bakery.',
        lesson: '"Ça fait" = it costs/that\'s (for giving the total). "Bonne journée" = have a good day (farewell).',
        quizQ: 'How much does Léa pay?',
        quizOpts: ['€2.50', '€3.20', '€4.00', '€5.10'],
        dialogueTr: ['The smell of fresh bread draws Léa into the bakery.', 'Hello! What can I get you?', 'A baguette and two pains au chocolat, please.', 'That comes to three euros twenty.', 'Here you go! Thanks, have a good day!'],
      },
    },
  },
  zh: {
    subtitle: 'A student exploring China',
    chapters: [{ title: 'Arrival in Beijing' }],
    scenes: {
      'zh-s1-1': {
        setting: 'Xiǎo Mǎ arrives at Beijing Capital Airport.',
        lesson: '请问 (qǐng wèn) = excuse me/may I ask. 往前走 = go straight ahead. 往右 = to the right.',
        quizQ: 'What is Xiǎo Mǎ looking for?',
        quizOpts: ['The metro', 'The taxis', 'The hotel', 'A restaurant'],
        dialogueTr: ['Xiǎo Mǎ arrives in China for the first time.', 'Hello! Welcome to China!', 'Hello! Excuse me, where are the taxis?', 'Go straight ahead, then turn right.', 'Thank you!'],
      },
      'zh-s1-2': {
        setting: 'Xiǎo Mǎ takes a taxi to central Beijing.',
        lesson: '去哪里 = where to? 大概 = approximately. 多少钱 = how much? 块 = yuan (colloquial).',
        quizQ: 'How much does the taxi cost?',
        quizOpts: ['50 yuan', '80 yuan', '100 yuan', '150 yuan'],
        dialogueTr: ['Xiǎo Mǎ gets in the taxi.', 'Where to?', 'Beijing University, please.', 'Alright. About 40 minutes.', 'How much?', 'About 100 yuan.'],
      },
      'zh-s1-3': {
        setting: 'Xiǎo Mǎ eats at the university cafeteria.',
        lesson: '新同学 = new classmate. 你想吃什么 = what do you want to eat? 好吃 = delicious. 一份 = one serving.',
        quizQ: 'What dish does the classmate recommend?',
        quizOpts: ['Fried rice', 'Kung pao chicken', 'Noodle soup', 'Dumplings'],
        dialogueTr: ['Xiǎo Mǎ goes to the university cafeteria for lunch.', 'Hello! Are you the new student?', 'Yes, my name is Xiǎo Mǎ. I\'m Mexican.', 'What do you want to eat? The kung pao chicken is delicious!', 'OK, I\'ll have one serving of kung pao chicken and rice.'],
      },
      'zh-s1-4': {
        setting: 'Xiǎo Mǎ needs to buy a SIM card.',
        lesson: '一张 = one (classifier for flat things). 需要 = to need. 流量 = mobile data. 够 = enough.',
        quizQ: 'How much does the card he chooses cost?',
        quizOpts: ['30 yuan', '50 yuan', '100 yuan', '200 yuan'],
        dialogueTr: ['Xiǎo Mǎ goes to a phone shop to buy a SIM card.', 'Hello, what do you need?', 'I want to buy a phone card.', 'We have 50 and 100 yuan ones. Which one?', 'The 100 yuan one. How much data?', '10 GB per month. That\'s enough.'],
      },
    },
  },
  de: {
    subtitle: 'A Latin American traveler in Germany',
    chapters: [{ title: 'Arrival in Berlin' }],
    scenes: {
      'de-s1-1': {
        setting: 'Carlos arrives at Berlin Airport.',
        lesson: '"Entschuldigung" = excuse me. "Geradeaus" = straight. "Links" = left. "Rechts" = right.',
        quizQ: 'What is Carlos looking for?',
        quizOpts: ['A taxi', 'The station', 'A hotel', 'A restaurant'],
        dialogueTr: ['Carlos arrives in Berlin.', 'Good day! Welcome to Germany!', 'Good day! Excuse me, where is the train station?', 'Go straight, then left.', 'Thank you very much!'],
      },
      'de-s1-2': {
        setting: 'Carlos goes to a German restaurant for dinner.',
        lesson: '"Ich hätte gern" = I would like (polite). "Speisekarte" = menu. "Zu trinken" = to drink.',
        quizQ: 'What does Carlos order to drink?',
        quizOpts: ['Water', 'Wine', 'Beer', 'Coffee'],
        dialogueTr: ['Carlos is hungry and goes to a restaurant.', 'Good evening! Here is the menu.', 'I would like a schnitzel with fries, please.', 'And to drink?', 'A beer, please.', 'Coming right up!'],
      },
      'de-s1-3': {
        setting: 'Carlos checks in at his hotel.',
        lesson: '"Reservierung" = reservation. "Schlüssel" = key. "Frühstück" = breakfast. "WLAN" = WiFi (pronounced "veh-lahn").',
        quizQ: 'What time is breakfast?',
        quizOpts: ['6-9', '7-10', '8-11', '7-9'],
        dialogueTr: ['Carlos arrives at the hotel.', 'Good evening! Do you have a reservation?', 'Yes, under the name Carlos García.', 'Room 204. Here is your key. Breakfast is from 7 to 10.', 'Is there WiFi?', 'Yes, the password is on the card.'],
      },
      'de-s1-4': {
        setting: 'Carlos learns to use Berlin\'s subway.',
        lesson: '"Welche" = which. "Haltestelle" = stop. "Umsteigen" = to transfer. "Einsteigen" = to board.',
        quizQ: 'How many stops is it?',
        quizOpts: ['One', 'Two', 'Three', 'Four'],
        dialogueTr: ['Carlos wants to go to the Brandenburg Gate.', 'Excuse me, which subway goes to the Brandenburg Gate?', 'The U55. Board at the next stop.', 'Do I need to transfer?', 'No, it\'s direct. Two stops.'],
      },
    },
  },
  ko: {
    subtitle: 'A programmer discovering South Korea',
    chapters: [{ title: 'Arrival in Seoul' }],
    scenes: {
      'ko-s1-1': {
        setting: 'Daniel arrives at Incheon Airport.',
        lesson: '어디에 있어요? = where is it? 앞으로 = forward. 오른쪽 = right. 왼쪽 = left.',
        quizQ: 'What is Daniel looking for?',
        quizOpts: ['A taxi', 'The metro', 'A hotel', 'A bus'],
        dialogueTr: ['Daniel arrives in Korea for the first time.', 'Hello! Welcome to Korea!', 'Hello! Where is the subway station?', 'Go forward and turn right.', 'Thank you!'],
      },
      'ko-s1-2': {
        setting: 'Daniel eats at a Korean restaurant.',
        lesson: '어서 오세요 = welcome (in shops). 몇 분 = how many people? 주세요 = please give me. 하나 = one.',
        quizQ: 'What does Daniel order?',
        quizOpts: ['Kimchi jjigae', 'Bibimbap', 'Tteokbokki', 'Samgyeopsal'],
        dialogueTr: ['Daniel enters a bibimbap restaurant.', 'Welcome! How many people?', 'One person. One bibimbap, please.', 'Yes, understood. Drinks?', 'Water, please.'],
      },
      'ko-s1-3': {
        setting: 'Daniel goes to a Korean convenience store.',
        lesson: '얼마예요? = how much? 원 = won (Korean currency). 카드 = card. ~도 = also.',
        quizQ: 'How much does he pay in total?',
        quizOpts: ['2,000 won', '3,000 won', '5,000 won', '10,000 won'],
        dialogueTr: ['Daniel needs to buy some things.', 'How much is this?', 'It\'s 2,000 won.', 'This and this too, please.', 'Total is 5,000 won. Would you like to pay by card?', 'Yes, by card.'],
      },
    },
  },
  it: {
    subtitle: 'A chef exploring Italy',
    chapters: [{ title: 'Arrival in Rome' }],
    scenes: {
      'it-s1-1': {
        setting: 'Sofía arrives at Rome Fiumicino Airport.',
        lesson: '"Scusi" = excuse me (formal). "Dove" = where. "Quanto costa" = how much. "Biglietto" = ticket.',
        quizQ: 'How much does the train cost?',
        quizOpts: ['€10', '€12', '€14', '€16'],
        dialogueTr: ['Sofía arrives in Rome for the first time.', 'Good morning! Welcome to Italy!', 'Thanks! Excuse me, where can I take the train to Rome?', 'Follow the signs for the Leonardo Express.', 'How much is the ticket?', 'Fourteen euros.'],
      },
      'it-s1-2': {
        setting: 'Sofía tries her first Roman pizza.',
        lesson: '"Per favore" = please. "Si accomodi" = have a seat. "Buonissima" = superlative of buona (very good).',
        quizQ: 'What type of pizza does she order?',
        quizOpts: ['Quattro formaggi', 'Margherita', 'Diavola', 'Capricciosa'],
        dialogueTr: ['Sofía enters a pizzeria near the Colosseum.', 'Good evening! Please, have a seat.', 'A margherita and a mineral water, please.', 'Right away! The pizza here is handmade.', 'Mmm, it\'s delicious!'],
      },
      'it-s1-3': {
        setting: 'Sofía buys ingredients at the Campo de\' Fiori market.',
        lesson: '"Mezzo chilo" = half a kilo. "Un po\' di" = a little bit of. "Ecco" = here you go. "Quant\'è" = how much is it?',
        quizQ: 'What does Sofía buy?',
        quizOpts: ['Pasta and oil', 'Tomatoes and basil', 'Bread and cheese', 'Meat and wine'],
        dialogueTr: ['Sofía goes to the market to buy fresh ingredients.', 'Good morning, madam! What would you like?', 'Half a kilo of tomatoes and some basil.', 'Here you go! Would you also like fresh mozzarella?', 'Yes, one! How much is it?', 'Four euros fifty.'],
      },
    },
  },
  pt: {
    subtitle: 'A musician exploring Brazil',
    chapters: [{ title: 'Arrival in Rio' }],
    scenes: {
      'pt-s1-1': {
        setting: 'André arrives at Rio de Janeiro\'s Galeão Airport.',
        lesson: '"Com licença" = excuse me. "Onde fica" = where is? "Em frente" = ahead. "Vire à esquerda" = turn left.',
        quizQ: 'Where does André want to go?',
        quizOpts: ['Ipanema', 'Copacabana', 'Downtown', 'Lapa'],
        dialogueTr: ['André arrives in Rio for the first time.', 'Good morning! Welcome to Brazil!', 'Thanks! Excuse me, where is the bus to Copacabana?', 'Go straight ahead and turn left.', 'Thank you very much!'],
      },
      'pt-s1-2': {
        setting: 'André visits a typical Brazilian bakery.',
        lesson: '"O que vai ser" = what will it be? "Para viagem" = to go. "Quanto é" = how much? "Reais" = Brazilian currency.',
        quizQ: 'How much does it cost?',
        quizOpts: ['5 reais', '8 reais', '10 reais', '12 reais'],
        dialogueTr: ['André enters a Rio bakery.', 'Good morning! What will it be?', 'A cheese bread and a café latte, please.', 'To go or to eat here?', 'To eat here. How much?', 'Eight reais.'],
      },
      'pt-s1-3': {
        setting: 'André enjoys Copacabana beach.',
        lesson: '"Olha" = look/buy (street vendors). "Tá" = is (informal for "está"). "Né" = right? "Linda" = beautiful.',
        quizQ: 'What does André buy?',
        quizOpts: ['Mate', 'Coconut water', 'Beer', 'Juice'],
        dialogueTr: ['André goes to Copacabana beach.', 'Get your mate! Get your coconut water!', 'A coconut water, please!', 'Five reais. It\'s hot today, isn\'t it?', 'Very! The beach is beautiful!'],
      },
    },
  },
  ru: {
    subtitle: 'An artist exploring Russia',
    chapters: [{ title: 'Arrival in Moscow' }],
    scenes: {
      'ru-s1-1': {
        setting: 'Pablo arrives at Moscow\'s Sheremetyevo Airport.',
        lesson: '"Извините" = excuse me. "Где" = where. "Прямо" = straight. "Налево" = left. "Направо" = right.',
        quizQ: 'What is Pablo looking for?',
        quizOpts: ['A taxi', 'The metro', 'A hotel', 'A café'],
        dialogueTr: ['Pablo arrives in Moscow in winter.', 'Hello! Welcome to Russia!', 'Hello! Excuse me, where is the metro?', 'Go straight, then left.', 'Thank you very much!'],
      },
      'ru-s1-2': {
        setting: 'Pablo enters a Russian café to warm up.',
        lesson: '"Что будете?" = what will you have? "Пожалуйста" = please. "Сколько стоит" = how much? "Рублей" = rubles.',
        quizQ: 'How much does it cost?',
        quizOpts: ['200 rubles', '300 rubles', '400 rubles', '500 rubles'],
        dialogueTr: ['It\'s very cold outside. Pablo enters a café.', 'Good afternoon! What will you have?', 'Tea with lemon and blini, please.', 'Good choice! Blini with smetana (sour cream)?', 'Yes, please! How much is it?', 'Four hundred rubles.'],
      },
      'ru-s1-3': {
        setting: 'Pablo discovers the famous Moscow metro.',
        lesson: '"Как красиво!" = how beautiful! "Вам куда?" = where are you going? "Мне нужна" = I need. "Остановка" = stop.',
        quizQ: 'Which station is Pablo going to?',
        quizOpts: ['Театральная', 'Охотный Ряд', 'Арбатская', 'Лубянка'],
        dialogueTr: ['Pablo goes down into the Moscow metro.', 'Wow! How beautiful! Like a museum!', 'Yes, our metro is very beautiful. Where are you going?', 'I need Red Square.', 'You need Okhotny Ryad station. It\'s two stops.'],
      },
    },
  },
  ar: {
    subtitle: 'A scientist exploring the Arab world',
    chapters: [{ title: 'Arrival in Cairo' }],
    scenes: {
      'ar-s1-1': {
        setting: 'Fernando arrives at Cairo Airport.',
        lesson: '"من فضلك" = please. "أين" = where. "على طول" = straight. "يمين" = right. "شمال" = left.',
        quizQ: 'What is Fernando looking for?',
        quizOpts: ['The metro', 'A taxi', 'The hotel', 'A restaurant'],
        dialogueTr: ['Fernando arrives in Egypt for a conference.', 'Hello! Welcome to Egypt!', 'Thanks! Please, where is the taxi?', 'Go straight, then right.', 'Thank you very much!'],
      },
      'ar-s1-2': {
        setting: 'Fernando tries Egyptian food.',
        lesson: '"لو سمحت" = please (Egyptian). "حاضر" = right away. "بالهنا والشفا" = bon appétit. "عيش" = bread (Egyptian).',
        quizQ: 'What drink does he order?',
        quizOpts: ['Coffee', 'Juice', 'Mint tea', 'Water'],
        dialogueTr: ['Fernando goes to an Egyptian restaurant.', 'Hello! What would you like to eat?', 'Ful, falafel and bread, please.', 'Sure thing! What will you drink?', 'Mint tea.', 'Bon appétit!'],
      },
    },
  },
  hi: {
    subtitle: 'An engineer exploring India',
    chapters: [{ title: 'Arrival in Delhi' }],
    scenes: {
      'hi-s1-1': {
        setting: 'Elena arrives at Delhi Airport.',
        lesson: '"माफ़ कीजिए" = excuse me. "कहाँ" = where. "सीधे" = straight. "बाएँ" = left. "दाएँ" = right.',
        quizQ: 'What is Elena looking for?',
        quizOpts: ['A rickshaw', 'The metro', 'A hotel', 'A taxi'],
        dialogueTr: ['Elena arrives in India for the first time.', 'Namaste! Welcome to India!', 'Namaste! Excuse me, where is the metro?', 'Go straight, then turn left.', 'Thank you very much!'],
      },
      'hi-s1-2': {
        setting: 'Elena tries the famous Indian chai.',
        lesson: '"दीजिए" = please give me. "कितने पैसे" = how much? "रुपये" = rupees. "भी" = also.',
        quizQ: 'How much does she pay in total?',
        quizOpts: ['10 rupees', '20 rupees', '30 rupees', '40 rupees'],
        dialogueTr: ['Elena goes to try street chai.', 'Madam, would you like tea?', 'Yes, one tea please. How much?', '10 rupees. Would you also like samosa?', 'Yes, give me two samosas!', 'Very good! Thirty rupees.'],
      },
    },
  },
  tr: {
    subtitle: 'A professor exploring Turkey',
    chapters: [{ title: 'Arrival in Istanbul' }],
    scenes: {
      'tr-s1-1': {
        setting: 'Ricardo arrives at Istanbul Airport.',
        lesson: '"Affedersiniz" = excuse me. "Nerede" = where? "Düz gidin" = go straight. "Sağa" = to the right.',
        quizQ: 'What is Ricardo looking for?',
        quizOpts: ['The bus', 'The metro', 'A taxi', 'The ferry'],
        dialogueTr: ['Ricardo arrives in Istanbul for the first time.', 'Hello! Welcome to Turkey!', 'Thanks! Excuse me, where is the metro?', 'Go straight, then turn right.', 'Thank you very much!'],
      },
      'tr-s1-2': {
        setting: 'Ricardo has tea at a Turkish tea garden.',
        lesson: '"Ne istersiniz?" = what would you like? "Lütfen" = please. "Ne kadar?" = how much? "Şekerli/şekersiz" = with/without sugar.',
        quizQ: 'How does he want his tea?',
        quizOpts: ['With sugar', 'Without sugar', 'With milk', 'With lemon'],
        dialogueTr: ['Ricardo goes to a tea garden by the Bosphorus.', 'Welcome! What would you like?', 'A tea and a simit, please.', 'I\'ll bring it right away! With sugar?', 'Without sugar, thanks. How much?', 'Thirty liras.'],
      },
    },
  },
};
