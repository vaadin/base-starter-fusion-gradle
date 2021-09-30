package com.example.demo;

import com.vaadin.flow.server.PWA;
import com.vaadin.flow.component.page.AppShellConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@PWA(name = "Project Base for Vaadin", shortName = "Project Base")
public class DemoApplication implements AppShellConfigurator {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
