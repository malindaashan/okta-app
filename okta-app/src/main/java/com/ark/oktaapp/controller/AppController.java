package com.ark.oktaapp.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class AppController {

    @RequestMapping(value = {"/", "/login/callback",
            "/about"})
    public String getIndex(HttpServletRequest request) {
        log.info("Incoming Url >> {}", request.getRequestURI());
        return "/index.html";
    }

}
