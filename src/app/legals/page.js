"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";
import Link from "next/link";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

export default function Legals() {
  return (
    <>
      <main className="flex min-h-screen flex-col w-full">
        {/* <Navbar /> */}
        <section className="bg-gray-100 px-4 md:px-16 py-24" id="markets">
          {/* <hr className="w-28 h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
          <div className="px-4 md:px-16">
            <Link
              rel="stylesheet"
              href="/"
              className="text-black hover:underline"
            >
              {"<-"} Back to home
            </Link>
          </div>
          <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className=" mt-4 md:mt-0 text-left flex flex-col h-full col-span-1">
              <ul className="flex flex-col">
                <li className="text-md cursor-pointer font-light">
                  <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                  <Link
                    href={"/legals/#privacy"}
                    className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                  >
                    Privacy Policy {"->"}
                  </Link>
                </li>
                <li className="text-md cursor-pointer font-light">
                  <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                  <Link
                    href={"/legals/#cookie"}
                    className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                  >
                    Cookie Policy {"->"}
                  </Link>
                </li>
                <li className="text-md cursor-pointer font-light">
                  <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr>

                  <Link
                    href={"/legals/#termsandconditions"}
                    className="block py-2 pl-3 pr-4 text-black text-2xl font-medium rounded md:p-0 hover:text-[#ADB7BE]"
                  >
                    Terms and Conditions {"->"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" mt-12 md:mt-4 md:mt-0 text-left flex flex-col h-full col-span-2">
              {/* <hr className="w-28 h-0.5 my-4 bg-black border-0 rounded md:my-10"></hr> */}

              <div id="privacy">
                <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                  Privacy Policy
                </h2>
                <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                  <p>
                    This privacy policy (&ldquo;Privacy Policy&ldquo;) explains
                    how we process and protect your personal data when you use
                    CLST MARKETS and relat. ed services (together
                    &ldquo;Platform&ldquo;).
                  </p>

                  <p>
                    The Platform is operated by Caeleste AG, Dufourstrasse 49,
                    8008 Z&uuml;rich, Switzerland (&ldquo;we&ldquo;,
                    &ldquo;our&ldquo;, or &ldquo;us&rdquo;). Official office
                    address, Caeleste AG, Kreuzstrasse 26, 8008 Zurich,
                    Switzerland
                  </p>

                  <p>
                    The protection of your personal data is important to us.
                    Unless otherwise defined in this Privacy Policy or our
                    General Terms and Conditions, the definitions used in this
                    Privacy Policy have the same meaning as in the Swiss Federal
                    Act on Data Protection or the EU General Data Protection
                    Regulation (&ldquo;Data Protection Legislation&ldquo;), as
                    applicable. In this Privacy Policy, we inform you about the
                    type, scope and purpose of the processing of your personal
                    data, as well as the rights to which you are entitled under
                    data protection law.
                  </p>

                  <p>Contact Us</p>

                  <p>
                    Unless otherwise stated below, the responsible party for the
                    processing of your personal data is Caeleste AG. If you have
                    any queries or require information on data protection at
                    Caeleste, please contact us at:
                  </p>

                  <p>
                    Caeleste AG Kreuzstrasse 26 8008 Zurich Switzerland
                    contact@clst.com
                  </p>

                  <p>Personal Data</p>

                  <p>
                    We collect the following types of personal data when you use
                    our Platform:
                  </p>

                  <p>
                    User account: Identification information, contact and login
                    information
                  </p>

                  <p>Subscription data: Payment details</p>

                  <p>
                    Contact form, email to support: Contact information and
                    content
                  </p>

                  <p>
                    Platform usage and interaction: Only to the extent that this
                    is necessary to make it possible for users to utilize the
                    services
                  </p>

                  <p>
                    Technical data: Time of access, the IP address, type of
                    browser and operating system
                  </p>

                  <p>Location-based data: Country of residence.</p>

                  <p>
                    If you do not wish to provide the mandatory information,
                    registration on the Platform and accessing our services is
                    not possible.
                  </p>

                  <p>How We Collect Personal Data</p>

                  <p>
                    We collect information about you when you use our Platform,
                    including taking certain actions within it. In short, most
                    of the personal data processed about you is data that you
                    provide to us by creating a profile on Caeleste, that is
                    generated in the course of contract execution or
                    communication, or that is generated when you use our
                    services. This may include, for example, page views and
                    information about your terminal device.
                  </p>

                  <p>Directly</p>

                  <p>
                    &bull; When User registers an account on the Platform,
                    access and uses the Platform.
                  </p>

                  <p>
                    &bull; When users correspond with us by electronic means.
                  </p>

                  <p>
                    &bull; When users sign up to receive our newsletter and
                    other marketing material.
                  </p>

                  <p>&bull; When users submit their data to us.</p>

                  <p>Indirectly</p>

                  <p>
                    &bull; From third parties, such as social media plugins and
                    third-party cookies.
                  </p>

                  <p>Legal Basis and Purposes</p>

                  <p>
                    Our legal basis for collecting and using the personal data
                    described in this Privacy Policy depends on the personal
                    data we collect and the specific purposes for which we
                    collect it.
                  </p>

                  <p>
                    In short, we use the personal data we collect to provide,
                    analyse and improve the Platform and our services; to
                    increase the security of the Platform; and to give you the
                    best possible experience. In addition, we use pseudonymised
                    data to create advertising target groups.
                  </p>

                  <p>
                    We are constantly working to provide you with the best
                    possible experience of our services.
                  </p>

                  <p>
                    To achieve this goal, we use personal data for the following
                    purposes:
                  </p>

                  <p>
                    Contract: To perform our contractual obligations or take
                    steps linked to a contract with you to:
                  </p>

                  <p>&bull; provide and protect our Platform and services,</p>

                  <p>&bull; manage your account,</p>

                  <p>
                    &bull; administer, manage and develop our business and
                    services.
                  </p>

                  <p>
                    Consent: We may rely on your freely-given consent at the
                    time you provided your personal data to:
                  </p>

                  <p>
                    &bull; provide you with news, special offers, newsletters,
                    and general information about goods and services which we
                    offer (with your explicit consent).
                  </p>

                  <p>&bull; promote our services.</p>

                  <p>
                    Legitimate interests: We may rely on legitimate interests
                    based on our evaluation that the processing is fair and
                    reasonable; to
                  </p>

                  <p>
                    &bull; maintain and improve our Platform and services, and
                  </p>

                  <p>&bull; develop new services.</p>

                  <p>
                    Public interest: To meet regulatory and public interest
                    obligations; to
                  </p>

                  <p>
                    &bull; comply with applicable regulations and legislation.
                  </p>

                  <p>Data Storage and Retention</p>

                  <p>
                    We will only store your personal data for as long as it is
                    necessary for the fulfilment of the above-mentioned purposes
                    and the provision of the services requested or booked by
                    you, or for other necessary purposes, such as the fulfilment
                    of our legal obligations, the settlement of disputes and the
                    enforcement of our legal position/defence of our legal
                    position as well as our General Terms and Conditions. Your
                    personal data will be deleted or anonymised when it is no
                    longer relevant for the stated purposes, and there are no
                    longer any retention obligations.
                  </p>

                  <p>Service Providers and Data Transfers</p>

                  <p>
                    We may employ third party companies (&ldquo;Service
                    Providers&ldquo;) to facilitate the operation of our
                    Platform, assist us in analysing how our Platform is used,
                    or perform Platform-related services, such as payment,
                    delivery or IT infrastructure services. These third parties
                    have access to your personal data only and insofar as
                    necessary to perform these tasks on our behalf and are
                    required to safeguard it in accordance with our contractual
                    obligations and applicable data protection legislation.
                  </p>

                  <p>
                    Types of Service Providers who might access your personal
                    data:
                  </p>

                  <p>&#9679; Accounting and insurance firms,</p>

                  <p>&#9679; Banks and financial services providers,</p>

                  <p>&#9679; Marketing, social media, and mailing providers,</p>

                  <p>
                    &#9679; Functional services providers, such as cloud service
                    providers and cloud databases,
                  </p>

                  <p>&#9679; Technology partners and developers,</p>

                  <p>&#9679; Monitoring, analytics, and tracking tools.</p>

                  <p>
                    For the majority of the activities, we or the Service
                    Providers process your personal data in Switzerland or in
                    the EU/EEA. When transferring abroad, we safeguard your
                    personal data per contractual obligations and in accordance
                    with applicable data protection legislation. Such safeguards
                    may include transfer to countries that have been deemed to
                    provide an adequate level of protection according to lists
                    of countries published by the Federal Data Protection and
                    Information Commissioner; applying standard data protection
                    model clauses, binding corporate rules or other standard
                    contractual obligations which provide for appropriate
                    protection of data.
                  </p>

                  <p>Data Disclosure</p>

                  <p>
                    We may disclose your personal data in the good faith belief
                    that such action is necessary:
                  </p>

                  <p>
                    &bull; To comply with a legal obligation (i.e. if required
                    by law or in response to valid requests by public
                    authorities, such as a court or government agency);
                  </p>

                  <p>
                    &bull; To protect the security of the Platform and defend
                    our rights or property;
                  </p>

                  <p>
                    &bull; To prevent or investigate possible wrongdoing in
                    connection with us;
                  </p>

                  <p>&bull; To protect ourselves against legal liability.</p>

                  <p>Data Security</p>

                  <p>
                    We take reasonable technical and organizational security
                    measures that we deem appropriate in order to protect your
                    stored data against manipulation, loss, or unauthorized
                    third-party access. Our security measures are continually
                    adapted to technological developments.
                  </p>

                  <p>
                    We also take internal data privacy very seriously. Our
                    employees and the Service Providers are required to maintain
                    secrecy and comply with applicable data protection
                    legislation. In addition, they are granted access to
                    personal data only insofar as this is necessary for them to
                    carry out their respective tasks or mandate.
                  </p>

                  <p>
                    The security of your personal data is important to us but
                    remember that no method of transmission over the Internet or
                    method of electronic storage is fully secure. While we
                    strive to use commercially acceptable means to protect your
                    personal data, we cannot guarantee its absolute security. We
                    recommend that you use antivirus software, a firewall, and
                    other similar software to protect your system.
                  </p>

                  <p>Data Protection Rights</p>

                  <p>
                    As a data subject, you have various rights vis-&agrave;-vis
                    us as the controller. These rights serve to ensure the
                    transparency of the processing of personal data. As a data
                    subject, you should be able to inform yourself and also know
                    whether, how, in what way and why we process your personal
                    data. You have the below data protection rights on the basis
                    of the Data Protection Legislation. We will respond to your
                    requests without undue delay, at the latest within one
                    calendar month after receipt. Please note that we may ask
                    you to verify your identity before responding to such
                    requests.
                  </p>

                  <p>
                    Right of access: You have a right to request a copy of your
                    personal data, which we will provide to you in an electronic
                    form.
                  </p>

                  <p>
                    Right to amendment: You have the right to ask us to correct
                    our records if you believe they contain incorrect or
                    incomplete information about you.
                  </p>

                  <p>
                    Right to withdraw consent: If you have provided your consent
                    to the processing of your personal data, you have the right
                    to withdraw your consent. This includes cases where you wish
                    to opt&#8209;out from marketing communications. Once we have
                    received notification that you have withdrawn your consent,
                    we will no longer process your information for the
                    purpose(s) to which you originally consented unless there is
                    another legal basis for processing. To stop receiving emails
                    from us, please click on the &lsquo;unsubscribe&rsquo; link
                    in the email you received.
                  </p>

                  <p>
                    Right to erasure: You have the right to request that we
                    delete your personal data when it is no longer necessary for
                    the purposes for which it was collected or when it was
                    unlawfully processed.
                  </p>

                  <p>
                    Right to restriction of processing: You have the right to
                    request the restriction of our processing of your personal
                    data where you believe it to be inaccurate, our processing
                    is unlawful, or where we no longer need to process it for
                    the initial purpose, but where we are not able to delete it
                    due to a legal obligation or because you do not want us to
                    delete it.
                  </p>

                  <p>
                    Right to portability: You have the right to request that we
                    transmit your personal data to another data controller in a
                    common format such as Excel, where this is data which you
                    have provided to us and where we are processing it on the
                    legal basis of your consent or in order to perform our
                    contractual obligations.
                  </p>

                  <p>
                    Right to object to processing: Where the legal basis for our
                    processing of your personal data is our legitimate interest,
                    you have the right to object to such processing on grounds
                    relating to your particular situation. We will abide by your
                    request unless we have a compelling legal basis for the
                    processing which overrides your interests or if we need to
                    continue to process the personal data for the exercise or
                    defence of a legal claim.
                  </p>

                  <p>
                    Right to lodge a complaint with a supervisory authority: You
                    have the right of appeal to a data protection supervisory
                    authority if you believe that the processing of your
                    personal data violates data protection law. The competent
                    data protection authority in Switzerland is the Federal Data
                    Protection and Information Commissioner
                    (www.edoeb.admin.ch/edoeb/en/home.html).
                  </p>

                  <p>Links to Third-Party Apps and Sites</p>

                  <p>
                    Our Platform may contain links to websites or apps that are
                    not operated by us. If you click a third-party link, you
                    will be directed to that third party&rsquo;s site or app. We
                    have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third-party
                    sites or services.
                  </p>

                  <p>Cookie Policy</p>

                  <p>
                    Cookies are files with a small amount of data that is
                    commonly used as an anonymous unique identifier. These are
                    sent to your browser from the website that you visit and are
                    stored on your computer&rsquo;s hard drive.
                  </p>

                  <p>
                    We use cookies to provide you with relevant information when
                    you visit our Platform or use our services. We also use
                    cookies to simplify and improve our services and measure
                    traffic and generate statistics. We may also use third-party
                    cookies to measure and analyse traffic and visitor behaviour
                    on our Platform, to create target groups for marketing
                    purposes, or to improve the functionality of the Platform or
                    our services.
                  </p>

                  <p>
                    You have the option to either accept or refuse these
                    cookies, and know when a cookie is being sent to your
                    computer. If you choose to refuse our cookies, you may not
                    be able to use some portions of our Platform.
                  </p>

                  <p>
                    For more information regarding our use of cookies, please
                    consult our Cookie Policy.
                  </p>

                  <p>Changes to This Privacy Policy</p>

                  <p>
                    We may update our Privacy Policy from time to time to
                    reflect changes to our products and services. We, therefore,
                    encourage you to review this Privacy Policy periodically for
                    any changes.
                  </p>

                  <p>
                    Changes to this Privacy Policy are effective when they are
                    posted on the Platform or our webpage.
                  </p>
                </p>
              </div>
              <div id="cookie">
                <hr className="w-full h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>

                <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                  Cookie Policy
                </h2>
                <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                  <p>Effective date: 27.01.2022</p>

                  <p>
                    OUR USE OF COOKIES Welcome to https://clst.com/(the
                    &ldquo;Platform&ldquo;).
                  </p>

                  <p>
                    Our Platform may use cookies to distinguish you from other
                    users. This helps us to provide you with a good browsing
                    experience and allows us to improve our Platform. On this
                    page (the &ldquo;Cookie Policy&ldquo;) you will find
                    information on what cookies may be set when you visit our
                    Platform and the purposes for which we use those cookies.
                  </p>

                  <p>
                    The Platform is owned and operated by Caeleste AG
                    (&lsquo;we&rsquo;, &lsquo;our&rsquo;, &lsquo;us&rsquo; as
                    applicable). For further detailed information, please see
                    our Terms of Use and our Privacy Policy
                  </p>

                  <p>
                    WHAT ARE COOKIES? A cookie is a small data file that is
                    placed on your browser or your hardware to allow a website
                    or platform to recognize you when you return to it. This can
                    either be for the duration of your visit (using a
                    &lsquo;session cookie&lsquo;) or for repeat visits (a
                    &lsquo;persistent cookie&lsquo;). Cookies can be created
                    through a variety of web-related protocols and technologies,
                    such as HTTP (sometimes referred to as &lsquo;browser
                    cookies&rsquo;), HTML5, or Adobe Flash.
                  </p>

                  <p>
                    Cookies are an extremely common technology for remembering
                    certain information about a website visitor. Most websites
                    and platforms currently make use of cookies for a wide range
                    of tasks. Cookies may be set by the website or platform in
                    question (&lsquo;first-party cookie&lsquo;) or third-party
                    suppliers and partners who set or read cookies on the
                    website or platform (&lsquo;third- party cookie&lsquo;).
                  </p>

                  <p>We use cookies for the following purposes:</p>

                  <p>
                    Strictly necessary cookies. These are cookies that are
                    required for the operation of our Platform. They include,
                    for example, cookies that enable you to use our live chat or
                    log into secure areas of our Functional cookies. These are
                    used to recognize you when you return to our Platform and to
                    embed functionality from third party services. This enables
                    us to personalize our content for you, greet you by name,
                    remember your preferences (for example, to pre- populate
                    form content you&rsquo;ve already entered previously) and to
                    integrate useful services provided by third party providers
                    into our Platform e.g. live chat, landing pages and relevant
                    pop-ups. Performance and analytics cookies. We use these
                    cookies to collect information that allows us to analyze web
                    traffic to our Platform, such as count the number of
                    visitors and see how they move around our Platform. The
                    information collected via those cookies is anonymous. We
                    send it to a third party that operates tools to analyze the
                    collected information. This helps us to improve the way our
                    Platform works, for example by making it easier for you to
                    find what you are looking Embedded third-party Some of the
                    content on our Platform (e.g. forms, buttons and pop-ups) is
                    provided by online services operated by third parties. When
                    you visit a page containing content from one of these
                    services, a cookie may be set by the relevant third party. A
                    list of the third-party cookies currently used in connection
                    with this Platform can be found in the cookie table. HOW TO
                    CONTROL AND DELETE COOKIES When you accessed the Platform,
                    you were presented with a message that notified you of our
                    use of cookies and helped you choose the cookies we can
                    place. We had to use a cookie to present you with that
                    notice (you can see details of this cookie under
                    &lsquo;Cookie Banner&rsquo; in the table below).
                  </p>

                  <p>
                    If you continue to use our Platform, more cookies and other
                    tracking technologies will be placed on your computer as
                    described in this Cookie Policy and as chosen by you in
                    order to enhance your user experience whilst on the
                    Platform.
                  </p>

                  <p>
                    If you wish to restrict or block the cookies which are set
                    by this Platform (or, indeed, on any other site) you can do
                    this through your browser settings. The &lsquo;Help&rsquo;
                    function within your browser should tell you how.
                  </p>

                  <p>
                    Alternatively, you may wish to visit
                    http://www.allaboutcookies.org/ which contains comprehensive
                    information on how to do this on a wide variety of browsers.
                    There you will find details on how to delete cookies from
                    your computer, as well as more general information about
                    cookies. Please note that, as these websites and platforms
                    are not owned or operated by us, we are not responsible for
                    any of the content on them.
                  </p>

                  <p>
                    Please be aware that restricting cookies may mean that you
                    will not be able to take full advantage of all the features
                    or services available on this Platform.
                  </p>

                  <p>
                    MAIN COOKIES USED BY US ON OUR SITE Here is a list of the
                    cookies used by us on this Platform together with details
                    about what each is used for:
                  </p>

                  <p>Cookie: _ga</p>

                  <p>Service: Google Analytics</p>

                  <p>Expiration: 2 years</p>

                  <p>Classification: Performance &amp; Analytics</p>

                  <p>
                    Purpose: This cookie is used to store the anonymous userid
                    used by Google Analytics, which we use to anonymously
                    identify visitors. This cookie is used for usage analytics.
                  </p>

                  <p>
                    EMAIL TRACKING Some of the emails we send to you may contain
                    a &lsquo;web beacon pixel&rsquo; (clear GIFs) or tracked
                    links which allows us to identify when you have opened the
                    email and to verify which links contained in the email you
                    have accessed. We use this information to determine which
                    parts of our emails are of most interest to you.
                  </p>

                  <p>
                    You can delete the pixel by deleting the email. If you do
                    not wish to download the pixel to your computer or other
                    device, you can ensure this by selecting to receive emails
                    from us in plain text rather than HTML, or not opening
                    pictures in your email.
                  </p>

                  <p>
                    Alternatively, you can unsubscribe from our mailing list by
                    clicking on &lsquo;Unsubscribe&rsquo; in the relevant
                    communication or by contacting us at admin@clst.com.
                  </p>

                  <p>
                    CONTACT US We value our customers and your privacy is very
                    important to us. If you have any questions or concerns about
                    cookies or your privacy, please do not hesitate to contact
                    us as follows:
                  </p>

                  <p>Caeleste AG</p>

                  <p>Email: admin@clst.com</p>
                </p>
              </div>
              <div id="termsandconditions">
                <hr className="w-full h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10"></hr>

                <h2 className="text-2xl md:text-4xl font-medium text-black mb-4">
                  Terms and Conditions
                </h2>
                <p className="text-sm md:text-base tracking-wide text-black font-light text-md text-gray-700 lg:text-lg">
                  <p>Caeleste AG GTC</p>

                  <p>September 2022</p>

                  <p>1. Scope</p>

                  <p>
                    These terms and conditions (&ldquo;Terms&ldquo;) apply to
                    the usage of the digital marketplace for the facilitation of
                    financial transactions between counterparties (&ldquo;CLST
                    MARKETS&rdquo;) and related services (together
                    &ldquo;Services&rdquo;) operated by Caeleste AG,
                    Dufourstrasse 49, 8008 Z&uuml;rich, a company organized
                    under the laws of Switzerland (&ldquo;Caeleste&ldquo;). By
                    registering on CLST MARKETS, you (&ldquo;Customer&ldquo;,
                    &ldquo;User&rdquo;) accept these Terms. If you do not agree
                    to these Terms, you cannot visit, use, or access CLST
                    MARKETS.
                  </p>

                  <p>
                    {" "}
                    CLST MARKETS uses cookies and similar technologies. By
                    continuing to use CLST MARKETS you are agreeing to our use
                    of cookies in accordance with our Cookie Policy, available
                    here. Our Terms incorporate by reference Caeleste&rsquo;s
                    privacy policy (&ldquo;Privacy Policy&ldquo;) which can be
                    found here. We reserve the right to change these Terms at
                    any time, and by using CLST MARKETS you are expected to
                    review such Terms on a regular basis.
                  </p>

                  <p>2. Use of Services</p>

                  <p>
                    CLST MARKETS and any Service made available by Caeleste
                    through CLST MARKETS is provided &ldquo;as is&rdquo;.
                    Caeleste makes the Services available to the Customer and
                    uses reasonable care and skill in the performance of the
                    Services.
                  </p>

                  <p>
                    {" "}
                    Caeleste does not guarantee that the Services will function
                    without any interruption or disruption. Caeleste regularly
                    carries out maintenance or improvements to the Services and
                    its infrastructure. The Customer acknowledges that this may
                    result in temporary delays and interruptions from time to
                    time. Where reasonably possible, Caeleste will inform the
                    Customer about potential interruptions in advance.
                  </p>

                  <p>
                    {" "}
                    The Customer agrees that where the Customer utilizes the
                    chat function in the Services, Caeleste has no obligation to
                    the Customer, and undertakes no responsibility, to review or
                    monitor the chat content to determine whether any chat
                    content may result in any liability to any third party.
                  </p>

                  <p>
                    {" "}
                    As a technology company, Caeleste is currently not regulated
                    by any financial services authority, or registered as a
                    broker-dealer or investment adviser in any jurisdiction.
                    CLST MARKETS serves to connect professional institutions
                    electronically but does not offer investment advice.
                    Caeleste does not retain, transfer or otherwise deal with
                    client money and the settlement of trades is carried out off
                    CLST MARKETS or by third parties who specialize in and are
                    authorized to provide such financial services. Caeleste
                    continually assesses its activities against the regulatory
                    environment of the jurisdictions in which it operates.
                  </p>

                  <p></p>

                  <p>3. Support and data backup</p>

                  <p>
                    Caeleste provides the Customer with the support as
                    reasonably required for the resolution of problems with the
                    day-to-day usage of CLST MARKETS.
                  </p>

                  <p>
                    {" "}
                    All data, including the Customer data is stored in
                    Switzerland or in the European Union.
                  </p>

                  <p>
                    {" "}
                    Caeleste takes all appropriate and reasonable precautions,
                    within the scope of technical possibilities, against data
                    loss and to prevent unauthorized third-party access to the
                    Customer data. For this purpose, Caeleste backs up the data
                    on a regular basis, monitors the Customer data for viruses,
                    and installs firewalls.
                  </p>

                  <p>
                    {" "}
                    For loss or corruption of Customer data, Caeleste works to
                    ensure the successful and timely backup and restoration of
                    that data.
                  </p>

                  <p></p>

                  <p>4. Customer Obligations</p>

                  <p>
                    The Customer is solely responsible for the accuracy and
                    completeness of the data and information it provides on CLST
                    MARKETS.
                  </p>

                  <p>
                    {" "}
                    The Customer may not circumvent or attempt to circumvent any
                    security protection of CLST MARKETS and may not use CLST
                    MARKETS in ways that are unlawful or fraudulent or have any
                    unlawful or fraudulent purpose or effect. The Customer may
                    not upload anything to the Services which contains viruses,
                    Trojan horses, worms, keystroke loggers, spyware, adware or
                    any other harmful programs or similar computer code designed
                    to adversely affect the operation of any website, computer
                    software or hardware.
                  </p>

                  <p>
                    {" "}
                    To gain full access to the Services, the Customer will need
                    to register and create an individual user account. The
                    Customer is fully responsible for maintaining the security
                    of such a user account, as well as for all activities that
                    occur under the account and any other actions taken in
                    connection with the account. The Customer ensures that
                    solely authorized Users can access CLST MARKETS with their
                    assigned credentials. The Customer shall immediately inform
                    Caeleste of any unauthorized use of the credentials.
                  </p>

                  <p></p>

                  <p>
                    The Customer acknowledges that failure to comply with its
                    duty of cooperation may result in malfunction of CLST
                    MARKETS and does not entitle the Customer to a refund or a
                    termination right.
                  </p>

                  <p>
                    {" "}
                    The Customer must choose a secure password in accordance
                    with Caeleste&rsquo;s specifications, and the password must
                    not be made accessible by the Customer to any unauthorized
                    third party.
                  </p>

                  <p>
                    {" "}
                    The Customer agrees to utilize the chat function only for
                    the intended purpose, i.e. for the discussion of details in
                    relation to the exchange of financial transactions with
                    other customers.
                  </p>

                  <p></p>

                  <p>5. Fee and Payment</p>

                  <p>
                    The provision of CLST MARKETS to the Customer is subject to
                    payment of the fees as indicated on the CLST MARKETS,
                    provided during the onboarding (e.g. in the onboarding form)
                    or otherwise agreed with the Customer (the
                    &ldquo;Fees&ldquo;). Except where prohibited by law, all
                    Fees are non-refundable. All Fees quoted, unless expressly
                    stated otherwise, are in CHF and exclusive of any sales,
                    value-added or similar taxes. Any right to set off, retain,
                    deduct, counterclaim and/or withhold any payments due under
                    these Terms vis-&agrave;-vis Caeleste is hereby expressly
                    waived and excluded.
                  </p>

                  <p>
                    {" "}
                    The Customer shall pay the Fees according to the
                    instructions provided during onboarding or at the CLST
                    MARKETS, otherwise monthly in advance. The Fees are payable
                    within thirty (30) days of the invoice date unless otherwise
                    indicated. After notice of non-payment and thirty (30) days
                    to cure, non-payment can result in the suspension or
                    termination of the Customer account. Late payments result in
                    an interest rate of 5% p.a.
                  </p>

                  <p></p>

                  <p>6. Intellectual Property Rights</p>

                  <p>
                    All rights, titles, and interests, including all copyrights,
                    trademarks, know-how, and other intellectual property and
                    other rights (&ldquo;Intellectual Property Rights&rdquo;) in
                    the Services, or any part of it, including Content provided
                    by Caeleste and the outputs will remain vested in Caeleste
                    and to the extent that any rights in such materials and data
                    vest in the Customer by operation of law, the Customer
                    hereby assigns such rights to Caeleste.
                  </p>

                  <p>
                    {" "}
                    In case the Customer shares on CLST MARKETS any Content that
                    is protected by Intellectual Property Rights, the
                    Intellectual Property Rights remain vested in the Customer.
                    For the purpose of these Terms, &ldquo;Content&rdquo;
                    includes any text, graphics, images, audio, video, software,
                    data compilations, page layout, underlying code and
                    software, and any other form of information capable of being
                    stored in a computer that appears on or forms part of CLST
                    MARKETS, including any such content uploaded by Users.
                  </p>

                  <p>
                    {" "}
                    Caeleste reserves the right to use the Content or other data
                    provided by the User in an anonymized or aggregated form for
                    market research purposes and to further develop and improve
                    the Services.
                  </p>

                  <p>
                    {" "}
                    The Customer shall not, without limitation, modify, copy,
                    transmit, distribute, display, perform, reproduce, publish,
                    license, frame, create derivative works from, transfer or
                    otherwise use in any other way, whether in whole or in part,
                    any information, text, graphics, images, video clips,
                    directories, databases, data, listings or software obtained
                    from CLST MARKETS for commercial or public purposes, without
                    our prior written permission. Systematic retrieval of
                    content from CLST MARKETS for any purpose without Caeleste
                    prior written permission is strictly prohibited.
                  </p>

                  <p>
                    {" "}
                    The Customer is granted a limited license only, subject to
                    the restrictions provided in these Terms, for the purposes
                    of viewing, using, and accessing CLST MARKETS.
                  </p>

                  <p>
                    Each party agrees that it shall not acquire or claim any
                    title to any of the other party&rsquo;s Intellectual
                    Property Rights by virtue of the rights granted to it in
                    accordance with these Terms or through its use of such
                    Intellectual Property Rights.
                  </p>

                  <p>
                    {" "}
                    Each party agrees that it will not, at any time, do, or omit
                    to do, anything which is likely to prejudice the other
                    party&rsquo;s ownership (or the other party&rsquo;s
                    licensors&rsquo; ownership) of such Intellectual Property
                    Rights.
                  </p>

                  <p></p>

                  <p>7. Exclusion of Warranties and liability</p>

                  <p>
                    CLST MARKETS, together with all content, data, information
                    and materials contained therein, is provided &lsquo;as
                    is&rsquo; and &lsquo;as available&rsquo;, without warranties
                    or representations of any kind. Caeleste is not obliged to
                    verify any calculations, data output or any other
                    information accessible through CLST MARKETS and it is the
                    Customer&rsquo;s sole responsibility to ensure that any such
                    calculation or information is precise and accurate. Caeleste
                    is not liable for any damages incurred by the Customer as a
                    result of wrong calculation, data output, or other
                    information obtained from CLST MARKETS.
                  </p>

                  <p>
                    {" "}
                    The Customer acknowledges and agrees that it is solely
                    responsible for the transactions processed via the Services.
                    Caeleste is a technology services provider and trades are
                    settled bilaterally outside of the Services or via
                    authorized third parties. Caeleste has no influence on the
                    conclusion, terms, settlement, payment, content or execution
                    of transactions. Caeleste is neither a party to nor a
                    beneficiary of any trade and is therefore not liable for any
                    damages incurred by the Customer in consequence of such a
                    trade.
                  </p>

                  <p>
                    {" "}
                    The Customer may not recover from Caeleste, regardless of
                    the legal reason, any amount with respect to loss of profit,
                    data or goodwill, or any consequential, incidental,
                    indirect, punitive or special damages in connection with
                    claims arising out of these Terms or otherwise relating to
                    CLST MARKETS, whether or not the likelihood of such loss or
                    damage was contemplated.
                  </p>

                  <p>
                    {" "}
                    For direct damages, Caeleste&rsquo;s liability is limited to
                    the amount of the Fees paid for the provision of CLST
                    MARKETS in the twelve (12) months prior to the occurrence of
                    the damaging event.
                  </p>

                  <p>
                    The limitations in this Section will not apply to losses or
                    damages caused by wilful misconduct or gross negligence or
                    to the extent prohibited by applicable law or to bodily harm
                    or damage to physical property.
                  </p>

                  <p>
                    {" "}
                    The Customer may not make a claim or bring proceedings
                    relating to the CLST MARKETS or otherwise under these Terms
                    against any of Caeleste&rsquo;s auxiliaries, members,
                    shareholders, directors, officers, partners, principals or
                    employees. Claims may be made, or proceedings brought only
                    against Caeleste.
                  </p>

                  <p>
                    {" "}
                    Neither party shall be liable for breach of these Terms
                    (other than payment obligations) caused by circumstances
                    beyond its reasonable control (force majeure).
                  </p>

                  <p>
                    {" "}
                    The Customer will defend, indemnify and hold Caeleste
                    harmless against any and all claims, liability, loss, costs,
                    penalties, and damages, including reasonable attorney fees,
                    arising out of the Customer&rsquo;s breach of any customer
                    obligations.
                  </p>

                  <p></p>

                  <p>8. Term, termination and suspension</p>

                  <p>
                    These Terms become effective upon registration by the
                    Customer.
                  </p>

                  <p>
                    {" "}
                    If not stated otherwise on CLST MARKETS, during the
                    onboarding or agreed upon between the parties, subscriptions
                    are concluded for an indefinite period of time and may be
                    terminated by either party by giving a one month&rsquo;s
                    notice at the end of the month.
                  </p>

                  <p>
                    {" "}
                    Either party may terminate for cause at any time in case of
                    material breach of these Terms by the other party.
                  </p>

                  <p>
                    {" "}
                    Termination of these Terms does not affect any rights,
                    obligations or liabilities of either party which have
                    accrued before termination or which are intended to continue
                    to have effect beyond termination.
                  </p>

                  <p>
                    {" "}
                    Caeleste may suspend any or all access to the CLST MARKETS,
                    its Services or the Customer&rsquo;s account based upon
                    Caeleste&rsquo;s reasonable determination of the occurrence
                    or potential for occurrence of illegal or wrongful activity,
                    fraudulent use or attempted fraudulent activity by the
                    Customer. In case of a substantiated suspension, the
                    Customer remains liable for all charges and fees incurred
                    during the suspension period.
                  </p>

                  <p></p>

                  <p>9. Confidentiality &amp; data protection</p>

                  <p>
                    In accordance with these Terms, the parties may disclose to
                    each other (directly or via use of the Services) information
                    that is confidential (&ldquo;Confidential
                    Information&rdquo;). Confidential Information includes,
                    without limitation, the Content, any information which is
                    marked as confidential or has otherwise been indicated as
                    being confidential or could reasonably be deemed
                    confidential and attributable to the Customer or Caeleste.
                  </p>

                  <p>
                    {" "}
                    Each party agrees to take all reasonable steps to keep all
                    confidential information of the other party strictly
                    confidential. Caeleste may only use and disclose
                    confidential information of Customer as instructed, as
                    necessary to operate CLST MARKETS or to comply with its
                    legal obligations.
                  </p>

                  <p>
                    The Customer represents and warrants that it is entitled to,
                    and has given all required notices, to provide the
                    information uploaded on CLST MARKETS to Caeleste.
                  </p>

                  <p>
                    {" "}
                    The Customer grants Caeleste the right to name the Customer
                    publicly as a reference and to use general information about
                    the agreed contract in an appropriate manner for marketing
                    and sales purposes, unless the Customer explicitly states
                    its disagreement with such use.
                  </p>

                  <p>
                    {" "}
                    Caeleste will process any personal data provided by the
                    Customer as necessary for the purposes of the Customer and
                    in line with its Privacy Policy.
                  </p>

                  <p></p>

                  <p>10. Miscellaneous</p>

                  <p>
                    Severability: If any provision of these Terms (in whole or
                    part) is held to be illegal, invalid or otherwise
                    unenforceable, the other provisions will remain mutatis
                    mutandis in full force and effect.
                  </p>

                  <p>
                    Links: CLST MARKETS may contain third party content or links
                    to third party websites. Caeleste does not assume any
                    responsibility for and does not make any warranties or
                    representations as to, any third-party content or websites,
                    including but not limited to, the accuracy, subject matter,
                    quality or timeliness.
                  </p>

                  <p>
                    Notices: All notices, requests, or other communications to
                    be given to any party under or in connection with these
                    Terms must be made in a text form and need to be sent:
                  </p>

                  <p>
                    &bull; to Caeleste&rsquo;s attention: via the CLST MARKETS
                    or to support@clst.com
                  </p>

                  <p>
                    &bull; to Customer&rsquo;s attention: via the CLST MARKETS
                    or to the last communicated or available address or email.
                  </p>

                  <p></p>

                  <p>
                    Jurisdiction &amp; governing law: The parties agree that all
                    legal relationships arising from this contractual
                    relationship shall be governed by material Swiss law under
                    exclusion of the conflict of law provisions and the UN
                    Convention on Contracts for the International Sale of Goods
                    (CISG). The ordinary courts of Zurich, Switzerland, shall
                    have exclusive jurisdiction arising in connection with the
                    fulfilment of this contractual relationship.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
        <EmailSection />
        <Footer />
      </main>
    </>
  );
}
