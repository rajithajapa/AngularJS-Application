<% 
String result = "login failed.";
String user = request.getParameter("user");
String username = request.getParameter("username");
String password = request.getParameter("password");
String email = request.getParameter("email");
 
 try {  
	if (user.isEmpty() || username.isEmpty() ||email.isEmpty()||password.isEmpty()) {
		out.print("Please enter the valid details");
	} else {
		out.print("You have given the required details"); 
	} 
 }catch(Exception e) {
	 out.print(result);
 }
	
%>
    

    