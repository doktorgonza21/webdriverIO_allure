class Bucket {
    resourcesMenuItems () {
        return [
            'Developer Docs',
            'Customer Stories', 
            'Blog', 
            'Bring Your Own Carrier', 
            'Mission Control', 
            'Savings Calculator'
          ]
    }

    missionControlItems () {
        return [
            'Sign up',
            'Log In'
        ]
    }

    socialItems () {
        return [
            'LinkedIn',
            'Twitter',
            'Facebook'
        ]
    }

    cityItems () {
        return [
            'Chicago',
            'Dublin',
            'Warsaw',
            'São Paulo',
            'Amsterdam',
            'Denver'
        ]
    }

    totalControl () {
        return [
            'Enhanced Security',
            'Private Network',
            '24/7 Support',
            'Quality Routing',
            'Set Your Resolution',
            'Protocol Choice',
            'High Reliability',
            'Elastic Scalability'
        ]
    }

    poweredByApi () {
        return [
            'Healthcare',
            'Professional Services',
            'Government',
            'Financial Services'
        ]
    }

    builtDifferent () {
        return [
            'Carrier License',
            'Global PoPs',
            'Private Fiber Backbone',
            'Intelligent Telephony Engine',
            'Multi-Cloud Architecture',
            'Tier-1 Interconnects'
        ]
    }

    positionList () {
        return [
            'Business Operations',
            'Marketing',
            'Sales',
            'Software Engineering'
        ]
    }

    dataTransferList () {
        return [
            'Overview',
            'Step 1: Know your transfer',
            'Step 2: Identify the transfer tool relied upon',
            'Step 3: Assess whether the transfer tool relied upon is effective in light of the circumstances of the transfer',
            'Step 4: Identify the technical, contractual and organizational measures applied to protect the transferred data',
            'Step 5: Procedural steps necessary to implement effective supplementary measures',
            'Step 6: Re-evaluate at appropriate intervals'
        ]
    }

    networkResults () {
        return [
            'Cloud VPN: Now in Open Beta',
            'New SIP Region for Canada'
        ]
    }

    faxResults () {
        return [
            'Faxes',
            'Debugging Tools',
            'Fax Webhooks',
            'inbound webhook',
            'Fax via API'
        ]
    }
 }

 module.exports =  new Bucket();
