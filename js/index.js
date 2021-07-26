 // Load your images on page-load
 function preloader() {
    const imagesPaths = [
       "./img/wind-energy.jpeg",
       "./img/governance.jpeg",
       "./img/solar-energy.jpeg"
    ];

    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    

window.addEventListener("load", preloader);


 /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
let controls = document.getElementById('controls');
let listBtns = controls.children;
// console.log(listBtns);


// getting references
let $dc = document.getElementById('dynamic-content');

    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

// resource

const data = {
    sltAccess: {
        headingContent: 'Accelerating Energy Access',
        imageURL: 'img/wind-energy.jpeg',
        imageAlt: 'wind-energy',
        bodyText: 'Ensuring universal access to energy is a moral imperative.  The United Nations Sustainable Development Goals, established in 2015, helped make energy access a global priority. <br><br> However, roughly three billion people still lack access to clean, safe cooking fuels. Dirty cooking fuels contributed to more than four million premature deaths in 2017 alone, and there is a significant urban-rural divide in terms of access to energy for cooking and electricity; nearly 87% of the people in the world without electricity live in rural areas, according to the International Renewable Energy Agency.'
    },

    sltPolicy: {
        headingContent: 'Strengthening Energy Policy & Governance',
        imageURL: 'img/governance.jpeg',
        imageAlt: 'governance',
        bodyText: 'Policies enabled by changing economics and innovation are supporting decarbonization. <br><br>  The emission reduction pledges governments made as part of the Paris Agreement on climate change will not suffice to limit global warming to 1.5°C above pre-industrial levels. <br><br>  Since the signing of the Paris Agreement, progress on climate and energy policy has primarily taken place at the federal, state, and local level - rather than at the international level. <br><br>  For example, the European Union aims to reduce greenhouse gas emissions to net-zero by 2050, and some member states have set even more ambitious net-zero targets. California, which boasts the world’s 5th-largest economy, has set 100% clean electricity standards together with nine other American states and territories; hundreds of cities and counties have followed suit. This progressive leadership is in part a response to delayed international action, and to increasing pressure from activists and political campaigns around the world.<br><br>  Policies that spur innovation and reconfigure markets are needed to enable the widespread deployment of clean technologies - and to achieve long-term emissions-reduction targets. Policy-makers can build on an increasingly large body of successful efforts around the world, and send the right signals by removing fossil fuel subsidies, introducing carbon emission pricing schemes, and creating efficiency targets that can be reached using existing technologies.<br><br>  One example of policies that can reconfigure markets is support for renewable schemes; falling renewable costs have made these resources competitive with alternative technologies, and as a result, policies to procure renewables have evolved into more competitive, market-based mechanisms like auctions. “Green New Deal” plans that put economic development and distributional equity at the centre of climate policies have gained popularity in the US and Europe - while their ultimate success remains to be seen, it is clear now that any successful climate plan must consider related impacts on inequality and justice. In addition, the corporate world has not ignored the changing policy landscape. Corporate targets for decarbonization are becoming increasingly popular, and several oil and gas supermajors have pledged to reduce emissions in line with a 1.5°C warming target.'
    },

    sltInnovation: {
        headingContent: 'Driving Energy Technology Innovation',
        imageURL: 'img/solar-energy.jpeg',
        imageAlt: 'solar-energy',
        bodyText: 'Innovation will be critical to complete the energy transition The cost of solar and wind power technologies has been significantly reduced, and a similar trajectory is expected for lithium-ion battery technology. However, as these become more prominent, additional innovation supporting their integration into energy systems (including smart grids and storage) needs to advance. Continued innovation in clean technologies will be crucial for achieving a cost-effective transition to net-zero carbon emissions; many are far from being on track in terms of broad market deployment. In terms of buildings, for example, efficiency improvements and policy reforms are required, as energy demand from cooling, heating, and powered devices grows. Systemic efficiency and digitalization will be necessary to transition both buildings and the cities where they are built to a net-zero future. Faster progress is also required for applications in the manufacturing and transportation sectors, which have significant barriers to electrification - including high-temperature industrial processes, and the fuels still necessary for maritime shipping, aviation, and heavy-duty transportation. Hydrogen and advanced biofuels have shown promise for many of these applications, but related costs remain high. And, the search for hydrogen-based technical solutions means it will be necessary to deploy large-scale, clean hydrogen production and generation infrastructure in parallel. Another technology recognized for its role in addressing the climate challenge is carbon capture, utilization and storage (CCUS). All credible energy decarbonization scenarios foresee a role for CCUS, due to the significant carbon lock-in associated with current infrastructure and the difficulty in decarbonizing some industrial sectors. However, CCUS has so far failed to progress beyond the demonstration stage. Its deployment will depend on sufficient carbon price signals and other support mechanisms to facilitate viable business models by bringing capital costs down. The idea of net-zero carbon industry clusters has gained some traction; these would co-locate energy- and emissions-intensive industries, and put CCUS in place with shared infrastructure. In terms of the subsequent use of captured carbon dioxide, more research is needed to find viable use cases that go beyond niche applications. Early-stage research and deployment is also occurring with direct air capture technologies (which would be able to extract CO2 from ambient air), and biomass-based solutions for negative emissions (also known as bioenergy CCS). Taking a more holistic approach to the carbon cycle and developing a “circular carbon economy” that treats carbon as a valuable resource - and not just waste - may be required.'
    }
};

    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    

// create the initial page markup:
let markup = {
    sltAccess: `<h2>${data.sltAccess.headingContent}</h2>
              <img src="${data.sltAccess.imageURL}" alt="" />
              <p>${data.sltAccess.bodyText}</p>`,
    
    sltPolicy: `<h2>${data.sltPolicy.headingContent}</h2>
                <img src="${data.sltPolicy.imageURL}" alt="" />
                <p>${data.sltPolicy.bodyText}</p>`,

    sltInnovation: `<h2>${data.sltInnovation.headingContent}</h2>
                <img src="${data.sltInnovation.imageURL}" alt="" />
                <p>${data.sltInnovation.bodyText}</p>`,
                   
};
              
// let markup = `<h1>${headingContent}</h1>
//               <img src="${imgUrl}" alt="${imgAlt}">
//               <p>${bodyText}</p>`; 

$dc.innerHTML = markup.sltAccess;


    /* 
    Start your handleSelection function here. */ 

function handleClick(ev) {
    // move the id-attribute to the currently clicked button
    let currentBtn = ev.target;
    console.log(currentBtn);

    // loop through the list of all nav-items
    for (let i = 0; i < listBtns.length; i++) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
        // if nav-item contans attribute type of id
        if (listBtns[i].hasAttribute('id')) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            // remove the attribute type of 'id'
            listBtns[i].removeAttribute('id');
        }
    }

    // add attribute to the currently clicked element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    currentBtn.setAttribute('id', 'active');

    // check if clicked, assign data 

    if (listBtns[0].hasAttribute('id')){
        $dc.innerHTML = markup.sltAccess;
    } else if (listBtns[1].hasAttribute('id')) {
        $dc.innerHTML = markup.sltPolicy;
    } else if (listBtns[2].hasAttribute('id')) {
        $dc.innerHTML = markup.sltInnovation;
    }
}


// registering list buttons for click event:
for (let i = 0; i < listBtns.length; i++) {
    listBtns[i].addEventListener('click', handleClick);
}

