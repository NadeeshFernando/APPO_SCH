<%-- 
    Document   : index
    Created on : Aug 12, 2023, 3:54:39 PM
    Author     : nadeesh.fe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <title>Index Page</title>
   <%@include file="COMPONENT_FOLDER/CSS.jsp"%>
  
 
   
</head>
    <body>
        <%@include file="COMPONENT_FOLDER/navigationb.jsp" %>
        
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      
      
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/J2.jpg" class="d-block w-100" alt="..." height="800px">
    </div>
    <div class="carousel-item">
      <img src="img/J3.jpg" class="d-block w-100" alt="..." height="800px">
    </div>
    <div class="carousel-item">
      <img src="img/J5.jpg" class="d-block w-100" alt="..." height="800px">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        <div class="container p-3">
    <p class="text-center fs-2">FEATURES</p>
    <div class="row">
        <div class="col-md-4">
            <div class="card point-card">
                <div class="card-body">
                    <p class="fs-5">
                        <b><center><h5>100% SAFETY</h5></center></b>
                    </p>
                    <p>
                        "Embrace worry-free interactions with our unwavering commitment 
                        to 100% safety. Your online security is our top priority, allowing 
                        you to explore with confidence and peace of mind."
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card point-card">
                <div class="card-body">
                    <p class="fs-5">
                        <b><center><h5>10 YEARS OF EXPERIENCE</h5></center></b>
                    </p>
                    <p>
                        With a remarkable 10 years of experience, The Jobs stands as 
                        a premier Consultation Centre in Colombo. Our expertise lies in 
                        providing free consultation services to job seekers aspiring to work 
                        abroad. Our specialized consultants, well-versed in country-specific 
                        nuances and job domains, offer invaluable advice. Operating part-time, 
                        we facilitate appointments through phone calls, emails, or personal visits, 
                        ensuring your journey towards overseas employment is safe and well-guided.
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card point-card">
                <div class="card-body">
                    <p class="fs-5">
                        <b><center><h5>FLEXIBLE APPOINTMENT BOOKING</h5></center></b>
                    </p>
                    <p>
                        Easily secure appointments with consultants through phone, email, or in-person 
                        visits. Our accessible booking options streamline the process for job seekers 
                        seeking valuable overseas employment guidance.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container p-3">
    <p class="text-center fs-2">OUR TEAM</p>
    <div class="row">
        <div class="col-md-4">
            <div class="card point-card border-0">
                <div class="card-body text-center">
                    <img src="img/CEO3.jpg" width="380px" height="380px">
                    <p class="fs-5">
                        <b><center><h5>CEO</h5></center></b>
                    </p>
                </div>
            </div>
        </div>
        
          <div class="col-md-4">
            <div class="card point-card border-0">
                <div class="card-body text-center">
                    <img src="img/consultant1.jpg" width="380px" height="380px">
                    <p class="fs-5">
                        <b><center><h5>HEAD OF CONSULTANT DEPARTMENT</h5></center></b>
                    </p>
                </div>
            </div>
        </div>
        
         <div class="col-md-4">
            <div class="card point-card border-0">
                <div class="card-body text-center">
                    <img src="img/consultant2.jpg" width="380px" height="380px">
                    <p class="fs-5">
                        <b><center><h5>SENIOR CONSULTANT OFFICER</h5></center></b>
                    </p>
                </div>
            </div>
        </div>
        
           <div class="col-md-4">
            <div class="card point-card border-0">
                <div class="card-body text-center">
                    <img src="img/consultant3.jpg" width="380px" height="380px">
                    <p class="fs-5">
                        <b><center><h5>HEAD OF CUSTOMER SUPPORT</h5></center></b>
                    </p>
                </div>
            </div>
        </div>
        
       <div class="col-md-8">
    <div class="card point-card border-0"> <!-- Removed "border-0" class to remove the border -->
        <div class="card-body text-left">
            <p class="fs-5">
                <p class="text-center fs-2">AMBITION</p>
                <P>
                Our job portal website is driven by a bold ambition: to reshape the way people approach 
                their careers and employers find top talent. With a keen focus on innovation and user-centric 
                design, we aim to create a transformative platform that redefines the job search and recruitment 
                process. Through an expansive array of features such as advanced search filters, personalized job 
                recommendations, and skill assessment tools, we strive to empower job seekers to navigate their 
                professional journey with confidence and purpose.

                Employers, on the other hand, can expect a seamless and efficient recruitment experience through our 
                platform. Our cutting-edge technology leverages data analytics and artificial intelligence to facilitate 
                precise candidate matching, saving time and resources while ensuring a better fit for organizational needs. 
                Moreover, we emphasize inclusivity and diversity by promoting equal opportunities and providing resources for 
                skill development and career advancement.

                Our vision extends beyond just job listings; we envision a comprehensive ecosystem where job seekers can access 
                educational content, career guidance, and networking opportunities, fostering continuous learning and growth. 
                Employers, in turn, benefit from streamlined recruitment processes, improved employer branding, and access to a 
                diverse talent pool.

                As we strive to achieve this ambitious vision, we are committed to user privacy and data security, ensuring a 
                trustworthy environment for both job seekers and employers. Collaborating with industry experts and staying attuned 
                to market trends, we constantly evolve to meet the dynamic demands of the job market.

                In conclusion, our job portal's ambition is to be a catalyst for positive change in the world of work.
                </p>
            </p>
        </div>
    </div>
</div>


        
    </div>
</div>

        
            
        </div>
        
        <%@include file="COMPONENT_FOLDER/footer.jsp"%>
        
    </body>
</html>
