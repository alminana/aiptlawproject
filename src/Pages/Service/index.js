import React from 'react'
import '../Service/style/service.css'
;
import Tabs, { TabPane } from 'rc-tabs';

function Service() {
  function callback(e) {
    console.log(e);
  }

  return (
    <div className="container">
    <Tabs tabPosition="left" defaultActiveKey="2" onChange={callback}>
      <TabPane tab="Trademark Overview"  key="1">
        <h2 className="servicetitle"> Trademark Overview</h2>
        <hr/>
        <p>Most countries over the world are first to file system which means that ownership of a trademark is given to the applicant who registers losing ownership of your trademark if it was registered by someone else prior to you. Obtaining the trademark registration certificate in a particular country means that you are the only one who can use this trademark to identify and distinguish your goods or services and gives you also the right to prevent others from using identical or similar trademarks in a country of registration.</p>
        <br/>
        <p>Usually, enterprises are willing to choose trademarks that reflect the nature of their goods or services. Although this is a valid target, direct description of products or services lowers the strength and exclusivity of trademark. Our advice on trademark selection will enable you to choose a strong and exclusive trademark that provides the same desired identification to your goods and services. We also examine the validity of the trademark according to the official language of the country in question.</p>
        <br/>
        <p>Madrid Protocol : provides for filing a single international trademark application before any of the member states and provides protection of the mark to all signatory of the Madrid Protocol. There are presently 91 contracting states to the Madrid Protocol.</p>
        <br/>
        <p>Madrid Agreement : provides for filing a single international Trademark application before any of the member states and provides protection of the mark to all signatory of the Madrid Agreement. There are presently 56 contracting states to the Madrid Agreement.</p>
        <br/>
        <p>Paris Convention : filing trademark in member countries provide the applicant the right of 6 months period to claim priority from the original trademark application. There are presently 173 contracting states of Paris Convention.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Trademark Registration" key="2">
        <h2 className="servicetitle"> Trademark Registration</h2>
        <hr/>
        <p>At AIP&T we provide full trademark registration services all over the world with special emphasize in Saudi Arabia and the other GCC countries at very competitive rates.</p>
        <br/>
        <p>Trademark registration is determined in Saudi Arabia by the trademark law of 2002. It takes between 7-9 months from filing to issuing a certificate of registration in Saudi Arabia. Once a trademark is registered, it will be protected in Saudi Arabia for 10 years and it will subject to renewal for similar period(s) every ten years.</p>
        <br/>
        <p>International Classification of Goods and Service are followed in Saudi Arabia and multi-class application is not available. Saudi Arabia has been a signatory country to the Paris Convention for the Protection of Industrial Property since 2003 and its trademark law is generally in compliance with the Paris Convention.</p>
        <br/>
        <p>GCC Countries are considering a uniform Gulf trademark law which will enable trademark owners to protect their trademarks in all the six GCC countries through a single application.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Trademark Infringment" key="3">
        <h2 className="servicetitle"> Trademark Infringment</h2>
        <hr/>
        <p>Infringement occurs if another business use or register an identical or similar trademark to yours in the same country of registration. The similarity between the two trademarks shall be enough to create customer confusion.</p>
        <br/>
        <p>You may need our law firm to file a lawsuit in the appropriate jurisdiction to prevent harmful effects of the infringer activities. The infringement action will enable you to prevent further infringement, collect damages, and destruct infriging or counterfeiting products. In Saudi Arabia for example, the Administrative Court (formerly was called Board of Grievance) is the court in charge of trademark infringement disputes.</p>
        <hr/>    
      </TabPane>
      <TabPane tab="Trademark Watch" key="4">
        <h2 className="servicetitle"> Trademark Watch</h2>
        <hr/>
        <p>In order to fully protect the IP rights of our client, AIP&T offers trademark watch as one of its services. Every month, AIP&T reviews new trademark filing to ensure no new published marks infringes our clients' mark.</p>
        <br/>
        <p>As soon as we find a pending application which infringes our clients' marks, we instantly notify our clients. Our staff can readily determine whether our client's mark and the new filing are confusingly similar.</p>
        <br/>
        <p>After notifying our clients, the firm's professionals can secure and protect their rights by filing an opposition against the registration of the mark.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Trademark Selection" key="5">
        <h2 className="servicetitle"> Trademark Selection</h2>
        <hr/>
        <p>Usually enterprises are willing to choose trademarks that reflect the nature of their goods or services. Although this is a valid target, direct description of products or services lowers the strength and exclusivity of trademarks. Our advice on trademark selection will enable you to choose a strong and exclusive trademark that does the same desired identification to your goods and services.</p>
        <br/>
        <p>We examine also the validity of the trademark according to the official language of the country in question.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Patent Overview" key="6">
      <h2 className="servicetitle"> Patent Overview</h2>
        <hr/>
        <p>A patent gives the patentee exclusive right to sell, use manufacture and license the invention. It also gives the power to the inventor to exclude all third parties from using, distributing, or selling the invention without the patentee's permission.</p>
        <br/>
        <p>Before filing application, it is very important to perform patentability search to find out whether to register the invention or not. Under patentability search, we at AIP&T search all in-force and expired patents plus any previous technology to find out whether or not a particular invention is novel and has inventive step.</p>
        <br/>
        <p>Patent drafting (drafting specification and claims) is the most sophisticated area of law because the person drafting the application has to follow the very complex instructions to claim the exact invention, avoid claiming prior
        art technology, and to avoid conflict between patent claims and patent specification. At AIP&T, we provide legal support to carry out the drafting process.</p>
        <br/>
        <p>Infringement search is used to determine whether or not a particular invention is infringing a protected patent. This type of search is more limited compare to patentability search because it only examines the invention in light of protected patent while patentability search examine the invention in light of protected/expired patent, and all the prior unprotected technology.</p>
        <br/>
        <p>Registration process is the third step for protecting invention after patentability search and drafting patent application. It is very important to know that a patentable invention is not protected by law in most of the countries covered by our service and not enforceable against third parties until the local Patent Office grants the inventor the patent certificate.</p>
        <br/>
        <p>For protecting your patent in the above mentioned countries, you must be aware that there are (3) three international treaties governing patent registration, namely; Patent Cooperation Treaty (PCT), Paris Convention, and the Gulf Cooperation Council (GCC).</p>
        <br/>
        <p>Patent Cooperation Treaty (PCT) : Filing under the PCT system provides (3) three years period to the applicant to claim priority from the original patent application in any of the member states of the PCT.</p>
        <br/>
        <p>Paris Convention : According to Article 4 (c) of the Paris Convention, filing a patent application under the Paris Convention provides (12) twelve months period to the applicant to claim priority from the original patent application in any of the member states of the Paris Convention.</p>
        <br/>
        <p>Gulf Cooperation Council (GCC) : The Gulf Cooperation Council (GCC) has its central patent registration system which is enforced in all the (6) six GCC countries; namely: Saudi Arabia, Kuwait, United Arab Emirates, Oman, and Bahrain. Thus, GCC patent law gives
        patentees acheter cialisthe right to protect their patents in all the above mentioned countries through a single registration.</p>
        <br/>
        <p>Patent Law Treaty (PLT) : The Patent Law Treaty (PLT) provides for unifrom requirements for filing and maintaining national or regional patent applications, for example, communications and representations regarding patents or patent applications.</p>
        <hr/>  
      </TabPane>
      <TabPane tab="Patent Registration" key="7">
        <h2 className="servicetitle"> Patent Registration</h2>
        <hr/>
        <p>The registration process is the third step for protecting an invention after the patentability search and drafting patent application. It is very important to know that a patentable invention is not protected by law in Saudi Arabia and not enforced against third parties until Saudi Patent Office grants the inventor a patent certificate. In 2004 the Saudi government enacted a law covering patents, layout designs of integrated circuits, plant varieties, and industrial models. According to the above law, a patent is given twenty years of protection from the date of filing the application and is subject to annual maintenance fees.</p>
        <br/>
        <p>The Gulf Corporation Council Countries (GCC) have a Uniform Patent Law which is enforced in six GCC (6) countries, namely: Saudi Arabia, Kuwait, United Arab Emirates, Oman, and Bahrain; Thus, the GCC patent law gives patentees the right to enforce their patents in all the above mentioned countries through a single registration. of the above systems.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Patent Drafting" key="8">
        <h2 className="servicetitle"> Drafting Patent Application</h2>
        <hr/>
        <p>Patent drafting (drafting specification and claims) is the most sophisticated area of patent law because the person drafting the application has to follow complex instructions to precisely claim the invention, avoid claiming prior art technology, and avoid conflict between patent claims and patent specification. At AIP&T we are very qualified in patent drafting and can carry out the drafting process of all kinds of technologies.</p>
        <br/>
        <hr/>      
      </TabPane>
      <TabPane tab="Patentability Search" key="9">
        <h2 className="servicetitle"> Patentability Search</h2>
        <hr/>
        <p>Before filing patent application, it is very important to perform a patentability search to find out whether it is possible to register the invention or not. Under a patentability search, we at AIP&T search all in-force and expired patents plus any previous technology to find out whether or not a particular invention is novel and has inventive step.</p>
        <br/>
        <hr/>      
      </TabPane>
      <TabPane tab="Patent Infringment Search" key="10">
        <h2 className="servicetitle"> Patent Infringment Search</h2>
        <hr/>
        <p>Infringement search is used to determine whether or not a particular invention is infringing an existing patent. This type of search is more limited compared to a patentability search because it only examines the invention in light of the existing patent, while a patentability search examines the invention in light of the valid/expired patents, and all the prior unprotected technology.
        The lawyers at</p>
        <br/>
        <p>AIP&T have experiences in multi-million dollar patent litigation for infringement of a petrochemical patent and a pharmaceutical patent.</p>
        <hr/>      
      </TabPane>
      <TabPane tab="Industrial Design" key="11">
        <h2 className="servicetitle"> Industrial Design Overview</h2>
        <hr/>
        <p>Today, global business organizations have realized the importance of protecting their market by protecting the uniqueness of the "design" of their products. This design helps the consumer to relate a particular product to a particular brand of business,thus creating a monopoly in the market.</p>
        <br/>
        <p>Generally, industrial design laws provide a protection period of (10) ten years to an industrial design.
        In contrast to patents, protecting an industrial design does not require the proof of an "Inventive Step" (non-obviousness).</p>
        <br/>
        <p>All that are required to protect an industrial design are
        "Uniqueness" and "Novelty".</p>
        <br/>
        <p>The Locarno Classification is an international classification used for the purposes of the registration of industrial designs. It was set up by an agreement concluded at a diplomatic conference held in Locarno in 1968: the Locarno Agreement Establishing an International Classification for Industrial Designs.The Locarno Classification comprises a list of classes and subclasses with explanatory notes and an alphabetical list of goods in which industrial designs are incorporated, with an indication of the classes and subclasses into which they fall. Presently, there are 52 contracting states to the Locarno Agreement.</p>
        <br/>
        <p>Paris Convention : According to Article 4 (c) of the Paris Convention, filing an industrial design application under the Paris Convention provides six months period to the applicant to claim priority from the original industrial design application in any of the member states of the Paris Convention.</p>
        <br/>
        <hr/>      
      </TabPane>
      <TabPane tab="Business & Corporate" key="12">
          <h2 className="servicetitle"> Business & Corporate Overview</h2>
          <hr/>
          <p>In addition to intellectual property and technology law matters, AIP&T provides services related to commercial, foreign investment, and corporate laws.</p>
          <br/>
          <p>AIP&T provides wide legal services to enable our clients to carry out all their business, investment,
          no prescription Enusre already hair the. and corporate activities in Saudi Arabia including:</p>
          <ul>
              <li>Legal advice on all aspects of commercial transactions and taxation liability</li>
              <li>Advising and defending our clients in disputes and litigation</li>
              <li>Follow-up for issuing commercial, industrial, and investment licenses</li>
              <li>Follow-up for registering all kinds of companies.</li>
          </ul>
          <br/>
          <p>We provide our clients with advise and drafting and negotiation services for a wide variety of commercial and corporate contracts such as:</p>
          <ul>
              <li>Memorandum of Understanding</li>
              <li>Joint Venture Agreements and Articles of Association</li>
              <li>Services Agreements</li>
              <li>Sales of Goods and Marketing Agreements</li>
              <li>Distribution & Agency Agreements</li>
              <li>Technology Transfer Agreements</li>
              <li>Software License Agreements</li>
              <li>Non-Disclosure Agreements</li>
              <li>Employment, Retainer, and Consultancy Agreements</li>
          </ul>
          <hr/>      
      </TabPane>
        <TabPane tab="Copyright Overview" key="13">
          <h2 className="servicetitle"> Copyright Overview</h2>
          <hr/>
          <p>While patent law protects the novel and creative ideas of inventors, copyright law protects any original expressions of authors and writers even if the said expressions are spontaneous, artless, and has no level of creativity. With this slight overview, we can see how extensive rights that could easily be protected by copyright law.</p>
          <br/>
          <p>The Berne Convention for the Protection of Literary and Artistic Works, usually known as the "Berne Convention", is an international copyright agreement composed of different countries thereby constituting a Union (Berne Union) for the protection of the rights of authors in their literary and artistic works. The Convention provides that copyright protection may not be conditioned on compliance with any formality, such as registration or deposit of copies. However, the basic elements of protection under the Berne Convention must be strictly observed in such a way that copyrights will be protected by requiring the signatories to honor and recognize the rights of all authors who are nationals of countries which are party to the Convention and that the laws of signatory States must provide the minimum levels of protection established by the Convention.</p>
          <br/>
          <p>Another principal international convention for the protection of copyright is the "Universal Copyright Convention". It was created as an alternative to the Berne Convention for those states which are non-signatory to the Berne Convention but still wants to participate in some form of multilateral copyright protection. Some Berne Convention states also became party to the UCC so that their copyrights could be protected in states which are non-signatory to the Berne Convention.</p>
          <br/>
          <p>The differences between Berne Convention and Universal Copyright Convention are with respect to duration of protection and formal requirements. As to duration of protection, the normal copyright protection mandated by the Berne Convention shall be during the lifetime of the author plus another 50 years from the time of
          death, subject to certain exceptions. On the other hand, the duration of copyright protection provided by the Universal Copyright Convention shall be during the lifetime of the author and not less than 25 years after the death of the author, subject to certain exceptions. With regard to formal requirements, the copyright protection under the Berne Convention does not depend on any formality, while the Universal Copyright Convention requires certain formalities as condition for copyright protection.</p>
          <br/>
          <p>On the other hand, Rome Convention for the Protection of Performers, Producers of Phonograms and Broadcasting Organizations, otherwise known as "Rome Convention", was drafted in order to secure protection in performances of performers, phonograms of producers of phonograms and broadcasts of broadcasting organizations.</p>
          <hr/>
        </TabPane>
    </Tabs>
  </div>
  )
}

export default Service
