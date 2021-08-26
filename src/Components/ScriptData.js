const ScriptData = [
    {
        choice: "Start", 
        prompt: "Rise and shine its your day off from the Krusty Krab. What do you wanna do first?",
        img: "https://i.pinimg.com/474x/1a/23/2a/1a232aba094696c5a146aced5ede8e77--spongebob-brody.jpg", 
        options: 
        [
        "Go To Patrick's house(...or rock I guess)",
        "Go to Squidward's house"
        ]
        
    },
    {
        choice: "Go To Patrick's house(...or rock I guess)",
        img: "https://media.distractify.com/brand-img/_UPHmE8JK/0x0/spongebob-squarepants-patrick-star-house-1602039250058.jpg", 
        prompt: "Patrick emerges from his rock home and greets you. Patrick: `Hey Spongebob wanna go Jellyfishing??`", 
        options: 
        [
        "Sure!",
        "No lets see what Sandy's up to instead"  
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
        img: "https://i.kym-cdn.com/entries/icons/original/000/037/578/coversquidfp.jpg", 
        prompt: "Squidward shrieks in fear and yells at you to leave once he comes to his senses. You return home. The end!", 
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