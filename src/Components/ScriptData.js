const ScriptData = [
    {
        choice: "Start", 
        prompt: "Rise and shine its your day off from the Krusty Krab. What do you wanna do first?",
        img: "https://c.tenor.com/y05bQXbwBIYAAAAM/sponge-bob-sleep.gif", 
        options: 
        [
        "Go To Patrick's house(...or rock I guess)",
        "Go to Squidward's house"
        ]
        
    },
    {
        choice: "Go To Patrick's house(...or rock I guess)",
        img: "https://64.media.tumblr.com/806c4690493dd27796a02727e59359da/da5e1255a98327e1-17/s500x750/58490e0bd6ae587a3d744ff7f75f59fe272a2b1b.gifv", 
        prompt: "Patrick emerges from his rock home and greets you. Patrick: `Hey Spongebob wanna go Jellyfishing??`", 
        options: 
        [
        "Sure!",
        "No lets see what Sandy's up to instead",
        "Nah we did that yesterday. Lets go to Goo Lagoon instead!" 
        ]
        
    },
    {
        choice: "Sure!",
        img: "https://i.pinimg.com/originals/57/83/cd/5783cd5bc824af6cdca5575e2e343d26.jpg", 
        prompt: "You and Patrick catch tons of jellyfish all day until you get tired and go home. The End!", 
        options: 
        [""]

    },
    {
        choice: "No lets see what Sandy's up to instead", 
        img: "https://i.ytimg.com/vi/CucZXiR7JRo/hqdefault.jpg",
        img2: "https://media.tenor.com/images/93ea5986d894e6f28a724b54242e7ae7/tenor.png",
        prompt: "You and Patrick go to Sandy's house find that it's snowing (somehow). You both find Sandy sleeping in her bed. Wake her up?", 
        options: 
        [
        "Yes",
        "No"
        ]
        
    },
    {
        choice: "Yes", 
        prompt: "Sandy wakes up in a fit of rage and destroys the both of you. Game Over",
        // img: "https://i.pinimg.com/originals/46/8c/9d/468c9d182f8e6a512e7f3488a2328f0e.png",
        img: "https://i.ytimg.com/vi/3bWb2mCmZ74/mqdefault.jpg",
        img2: "https://img.betaseries.com/B-WNiRZhE-QHrEpyRgm9FSnw92E=/500x282/smart/https%3A%2F%2Fpictures.betaseries.com%2Fbanners%2Fepisodes%2F75886%2F99538b6639a286d6b7a54000e29cc696.jpg", 
        options: 
        [""]
        
    },
    {
        choice: "No", 
        prompt: "You and Patrick return home with your limbs in tact. The end!",
        img: "https://vignette.wikia.nocookie.net/spongebob/images/7/77/Patrick_Sleeping.PNG/revision/latest?cb=20140620112209",
        img2: "https://i.ytimg.com/vi/LNq-PiFr1HI/maxresdefault.jpg", 
        options: 
        [""]
        
    },
    {
        choice: "Nah we did that yesterday. Lets go to Goo Lagoon instead!",
        img: "https://pbs.twimg.com/media/E2aIaDeWEAE4NO5.jpg",
        img2: "https://i.gifer.com/38WF.gif", 
        prompt: "You and Patrick arrive at Bikini Bottom and see Larry the Lobster. Larry the Lobster: `Hey guys! We're having a little competition going on over here. Wanna join?`", 
        options: 
        [
        "Yeah count us in!",
        "No I think we'll do something else. Have fun though!"
        ]
        
    },
    {
        choice: "Yeah count us in!",
        img: "https://i.pinimg.com/originals/07/32/c9/0732c9ab8ead561dfc5049c22d9eab24.gif", 
        prompt: "While practicing you struggle for dear life to lift cups while Patrick seems to be having an easier time. What do you wanna do?", 
        options: 
        [
        "Acquire some inflatable gains",
        "Bow out humbly and accept defeat"
        ]
        
    },
    {
        choice: "Acquire some inflatable gains",
        img: "https://pm1.narvii.com/7255/3baebab5196dc941c7668f6b5e018065ae9703c1r1-1440-985v2_hq.jpg",
        img2: "https://i.gifer.com/NxlD.gif", 
        prompt: "You acquire the extra glamour gains at the cost of actual strength. Your muscles fail and you explode. Game over!", 
        options: 
        [""]
        
    },
    {
        choice: "Bow out humbly and accept defeat",
        img: "https://c.tenor.com/Fp-PmpVruOUAAAAC/drop-buddy-drop-buddie.gif",
        img2: "https://i.gifer.com/1RK2.gif", 
        prompt: "`You: Sorry Larry I don't think I'm cut out for this. Good luck though!` You and Patrick proceed to have your own bubble blowing contest before you end the day. The end!", 
        options: 
        [""]
        
    },
    {
        choice: "No I think we'll do something else. Have fun though!",
        // img: "https://64.media.tumblr.com/4cb890c806688ceaa8f81430e353e013/tumblr_mqkpewBxNX1s10f1do1_1280.jpg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirxCQKwiyI6NXl_iZX2p6ibmbgHCySNcB8Psv2K58A4MASp4bOUzBeqVpkm5vIzBVMd4&usqp=CAU",
        prompt: "You decline Larry's offer to compete. Patrick stays with Larry and the two of you part ways. While walking through the far ends of Goo Lagoon you find Plankton. Plankton: Hey Spongebob would you like to help me with something? I'll let you have one of these ice creams.", 
        options: 
        [
        "Yeah anything for ice cream!",
        "No sorry Plankton I think I'll head back home instead."
        ]
        
    },
    {
        choice: "Yeah anything for ice cream!",
        img: "https://j.gifs.com/Nk2q1D.gif",
        img2: "https://i.pinimg.com/474x/a7/9d/4a/a79d4af34e2cbae392aea9b7cabd7a3d.jpg",
        prompt: "Plankton successfully tricks you into kicking everyone out of Goo Lagoon so he can build his Mega Chum Bucket. Game over!", 
        options: 
        [""]
        
    },
    {
        choice: "No sorry Plankton I think I'll head back home instead.",
        img: "https://i.makeagif.com/media/9-11-2018/wiMV1q.gif",
        img2: "https://i.pinimg.com/originals/ac/2d/d1/ac2dd1987e77d3913e6606b0d7afd9f0.png",
        prompt: "Plankton: Curse you Spongebob I'll never forget this. You sucessfully thwart Plankton's scheme and return home to prepare for a rewarding day at work at the Krusty Crab. You win!", 
        options: 
        [""]
        
    },
    {
        choice: "Go to Squidward's house",
        img: "https://i.pinimg.com/originals/eb/2c/be/eb2cbefcd1ef8578a5f10376dfb608bf.jpg",
        img2: "https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_325,w_512,x_0,y_59/w_1600,c_limit,f_auto,q_auto:eco/squidward-clarinet-lil-yachty_qzsd1g/squidward-clarinet-lil-yachty_qzsd1g.jpg", 
        prompt: "You get to Squidward's house and hear very bad clarinet music playing from his window. What do you do?", 
        options: 
        [
        "Enter his house through window",
        "Go back home"  
        ]
        
    },
    {
        choice: "Enter his house through window",
        img: "https://64.media.tumblr.com/4c33deaabf2c44f502b4597bc875731e/tumblr_ot88nc5grh1tkb2p0o1_500.gifv", 
        img2: "https://i0.wp.com/couchguysports.com/wp-content/uploads/2020/12/Squilliam-Main-Image.png?resize=800%2C445&ssl=1",
        prompt: 
        "Squidward shrieks in fear and yells at you to leave once he comes to his senses. You both hear a knocking at the door and it turns out to be none other than Squilliam fancyson! Squilliam: Sooo Squidward it sounds like you're practicing for the bubble Bowl. I hope that isn't all you got. Squidward: Well uh-", 
        options: 
        [
        "Me and Squidward in a band together? I'm so excited lets do it!!",
        "Ignore the situation"
        ]
        
    },
    {
        choice: "Me and Squidward in a band together? I'm so excited lets do it!!",
        img: "https://c.tenor.com/wQZ1vjdJw8YAAAAC/spongebob-band.gif", 
        img2: "https://64.media.tumblr.com/96408a1aa5f45e42ec7bc9ad4ed4204b/59fe70d18b2447a7-83/s640x960/c50252bc381087943bcfb81186a19afed7687e8e.jpg",
        prompt: 
        "Squilliam: Well don't get your hopes up kiddo. Good luck Squidward (HA HA HA HA HA). Squidward: Ok Spongebob lets get serious. Spongebob and Squidward assemble a band in preparation for the Bubble Bowl. Your baton-twirlers seem to be going pretty hard in practice as per Squidward's instruction. Should they slow down?", 
        options: 
        ["Nope! They need the practice"]
        
    },
    {
        choice: "Nope! They need the practice",
        img: "https://i.makeagif.com/media/7-02-2018/u1UhIo.gif",
        img2: "https://i.makeagif.com/media/8-12-2019/JjQQZ4.gif", 
        prompt: 
        "Well they're (probably) dead now. Uh...anyways The band makes it to the Bubble Bowl and crushes the performance. The band-twirlers' sacrifice will not be forgotten. The end!", 
        options: 
        [""]
        
    },
    {
        choice: "Ignore the situation",
        img: "https://newfastuff.com/wp-content/uploads/2019/06/8dTTcxt.png", 
        prompt: "Squidward cries in despair after being taunted by Squilliam. You return home. Game Over!", 
        options: 
        [""]
        
    },
    {
        choice: "Go back home",
        img: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nickelodeon.com.au/gary-top-20-moments-576.jpg?quality=0.80", 
        prompt: "You return home and spend a relaxing evening hanging out with Gary. The end!", 
        options: 
        [""]
        
    }
]

export default ScriptData;