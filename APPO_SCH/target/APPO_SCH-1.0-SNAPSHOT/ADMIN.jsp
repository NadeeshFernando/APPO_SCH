<%-- 
    Document   : ADMIN
    Created on : Aug 12, 2023, 4:17:54 PM
    Author     : nadeesh.fe
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <%@include file="COMPONENT_FOLDER/CSS.jsp"%>
    </head>
    <body>
         <%@include file="COMPONENT_FOLDER/navigationb.jsp" %>
         <div class="container p-5">
             <div class="row">
                 <div class="col-md-4 offset-md-4">
                     <div class="card point-card">
                         <div class="card-body">
                             <p class="fs-4 text-center">ADMIN LOGIN</p>
                             <form action="ADMIN" method="post">
                                 <div class="mb-3">
                                     <label class="form-label">Email address</label>
                                     <input required name="email" type="email" class="form-control">
                                 </div>
                                 <div class="mb-3">
                                     <label class="form-label">Password</label>
                                     <input required name="password" type="password" class="form-control">
                                 </div>
                                 <button type="submit" class="btn-bg-black text-white col-md-12">Login</button>
                             </form>
                         </div>
                     </div>
             </div>
         </div>
    </body>
</html>
