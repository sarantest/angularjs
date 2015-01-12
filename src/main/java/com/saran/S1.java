package com.saran;

import java.io.IOException; 
import java.io.PrintWriter; 
import javax.servlet.ServletException; 
import javax.servlet.annotation.*; 
import javax.servlet.http.HttpServlet; 
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse; 


public class S1 extends HttpServlet { 

@Override 
protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException { 
res.setContentType("text/html"); 
PrintWriter out = res.getWriter(); 
out.write("<h2> Welcome to the world of servlet annotation </h2>"); 
out.write(""); 
out.close(); 
} 


} 
