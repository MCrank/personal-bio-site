import $ from 'jquery';
import bioData from '../../data/bioData';
import './Bio.scss';

const bioStringBuilder = () => {
  let bioDomString = '';
  bioDomString = `
  <div class="jumbotron container text-white" id="bio-container">
    <h1 class="text-white text-center">About Me</h1>
    <hr class="my-4 border border-white" />
    <p>
      Growing up as an "Army brat", I had the pleasure of staying in various locations around the world; finally settling in Clarksville, TN after my dad's retirement from the Army.
    </p>
    <p>
      I started my love of computers with a Commodore VIC-20, Apple IIe in middle school, Commodore 64 and various other incarnations of PC through Highschool. Upon graduation I joined the Navy and served aboard a nuclear powered attack submarine operating the <a href="https://fas.org/man/dod-101/sys/ship/weaps/mk-1-css.htm" target="_blank">CCS-MK1 Fire Control System</a> and AN/BQQ-5 Sonar System.
    </p>
    <p>
    After leaving the Navy in late 1994 I moved to Kuwait where I worked on an Army defense contract as a Senior Systems Administrator at <a href="https://en.wikipedia.org/wiki/Camp_Doha" target="_blank">Camp Doha</a> for 5 years.  My responsibilities ranged from operating the Microsoft Active Directory and Exchange services to deploying and configuring the Cisco infrastructure in support of DOD <a href="https://en.wikipedia.org/wiki/NIPRNet" target="_blank">NIPRNet</a> and <a href="https://en.wikipedia.org/wiki/SIPRNet" target="_blank">SIPRNet</a>.
    </p>
    <p>
    Upon completing my contract in Kuwait I returned to Nashville, TN to start my career working at Hospital Corporation of America (HCA) in the Wintel Certification Department and ultimately becoming the manager of Wintel Engineering. The Engineering team focused on working with in house development, operations, and security teams to provide a scalable, redundant, and secure platform for HCA applications and services.
    </p>
    <p>
    I left HCA in early 2008 to persue a career in consulting where I landed at ProSys and then British Telecom (BT) performing various services around the Microsoft stack, such as Exchange and Active Directory migrations. In late 2013 I was approached by some colleagues from HCA, who founded LeanKit, Inc, to come and lead the Infrastructure Operations team.  This is really where my passion for Software Development flourished and what ultimately pushed me to apply for a 12 Month full stack boot camp at <a href="http://nashvillesoftwareschool.com/" target="_blank">Nashville Software School</a>.
    </p>
    <p>
      I am currently employed as a Senior Consultant for an Azure Professional Services company providing cloud strategy, design, and implementation to our clients.  I enjoy automating and scripting infrastructure in support of DevOps processes.
    </p>
  </div>
  `;
  $('#bio').html(bioDomString);
};

const getBioData = () => {
  bioData
    .getBioData()
    .then((bio) => {
      bioStringBuilder(bio.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getBioData, bioStringBuilder };
