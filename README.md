# Test task

You have to replicate the page located here:
http://project282874.tilda.ws/page2516952.html



###### First block (with background picture)

We'd like to have a countdown timer centered at the bottom of the page.
This counter should count *month, days, hours, minutes and seconds* before the event. Event date is 25th September 2018.

Please use countdown library from the repo. It requires jQuery.
Setting up code is:

```JS
$('.countdown').countdown('2018/09/25 00:09:00', function(event) {
 var $this = $(this).html(event.strftime(''
   + '<div class="date">%m <span>Months</span></div>  '
   + '<div class="date">%n <span>Days</span></div> '
   + '<div class="date">%H <span>Hrs</span></div>  '
   + '<div class="date">%M <span>Min</span></div>  '
   + '<div class="date">%S <span>Sec</span></div> '));
});
```

```html
<div class="countdown"></div>
```

For styling please check `countdown-example.png` file in the root directory of the repo.
Counter should change itself for small devices like mobiles.

###### Gallery with slider block
You can use any JS library for the slider. The only requirements for this block are:

1. Gallery should show 4 pictures (save pictures from Tilda to the local repo)
2. Slider block should be with blue background

###### Conference Program
We have two-days event, so I want you to add additional day to be available on button "Day 2" click.
Use same content for Day 2 as shown on Day 1 (or you can modify it by yourself).

###### Map

Our event venue is in Munich, Germany. Please target map marker to Marienplatz.


### Additional blocks
We'd like to have 2 additional blocks on page. You should decide how to show them on page by yourself.

###### Event Key Topics
* Identity & Access Management (IAM) 2020 Cognitive Identity

  * PxM: Privileged Account Management

  * The Future of Authentication and On-Premise IAM

  * IDaaS: From SSO to comprehensive approaches

  * On Premise, in the Cloud & Hybrid

  * IAM Managed Services: Should we get rid now of our On-Premise IAM?

  * Creating an IAM Services Blueprint that Works

  * Identity Standards & Trust Models

  * The role of OpenID Connect & OAuth2 for PSD2 compliant infrastructures

* Customer Identity Management (CIAM) as a Business Enabler in the Age of Digital Transformation

  * Innovating the Journey from unknown visitors to loyal customers

  * Balancing User Experience, Privacy, and Security for the Connected Consumer

  * Managing Consent: Compliance Challenges & Audit Requirements

  * Performance, availability & resilience of CIAM infrastructures

  * PSD2 and how it will influence the way you authenticate your visitors

* Privacy & GDPR

  * Solving Your GDPR Compliance Challenges

  * Privacy-by-Design & Consumer/Customer Identity: The Foundations for Globally Compliant Marketing Automation

  * Identity Governance in the Light of GDPR


###### Key Speakers

In the `speakers` folder you'll find key speakers photos. We'd like to have separate block for key speakers somewhere on the page.
Please prepare photos (if needed) by yourself. Here is our key speakers list:

* Max Holden, Founder & Art Director, Apple
* Carlos Stark, Customers Support, Microsoft
* Julia Bush, Design Director, IBM
* Carlos Lott,  Marketing Director, China Petroleum & Chemical Corporation



# Technical notes

Plase use SASS as your CSS preprocessor. We'd like to have library with the following structure (according to blocks on page):
```
css/
  event.scss
  /blocks
    intro.scss
    description.scss
    sponsors.scss
    gallery.scss
    program.scss
    map.scss
```
Please use SASS variables to define the color scheme for the event (blue one for this particular) - for buttons and gallery background.

Please avoid using unnecessary html elements in your markup. Try keeping code dry and easy to read.

We'd like to have page optimized for desktops, tablets and mobiles.
