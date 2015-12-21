package so.glad.profile.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import so.glad.profile.form.MessageForm;

import java.util.Date;

/**
 * @author Cartoon
 *         on 2015/4/16.
 */
@Controller
public class DefaultController {

    Logger logger = LoggerFactory.getLogger(DefaultController.class);

    private MailSender mailSender;

    @RequestMapping(value = "/send_mail.html", method = RequestMethod.POST)
    public @ResponseBody String sendMail(@ModelAttribute MessageForm messageForm){
        try{
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setSubject(StringUtils.isEmpty(messageForm.getSubject()) ? "Vistor From Gear Profile" : messageForm.getSubject());
            simpleMailMessage.setSentDate(new Date());
            simpleMailMessage.setTo("Cartoon Daemon<m@cheku.co>");
            simpleMailMessage.setFrom(messageForm.getEmail());
            simpleMailMessage.setText(messageForm.getMessage() +
                    "\n\n\n==============================================\n\n" +
                    messageForm.getName() + "<" + messageForm.getEmail() + ">");
            mailSender.send(simpleMailMessage);
            logger.info("Send mail success");
            return "{\"result\": \"success\"}";
        } catch (Exception e) {
            logger.error("Send mail error", e);
            return "{\"result\": \"fail\"}";
        }
    }

    @Autowired
    public void setMailSender(MailSender mailSender){
        this.mailSender = mailSender;
    }
}
