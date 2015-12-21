package so.glad.profile.form;

import com.google.common.base.Objects;

/**
 * @author Cartoon
 *         on 2015/4/16.
 */
public class MessageForm {

    private String name;

    private String email;

    private String subject;

    private String message;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MessageForm)) {
            return false;
        }
        MessageForm that = (MessageForm) o;
        return Objects.equal(name, that.name) &&
                Objects.equal(email, that.email) &&
                Objects.equal(subject, that.subject) &&
                Objects.equal(message, that.message);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name, email, subject, message);
    }
}
