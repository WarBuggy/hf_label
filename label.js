let data = {
    email_phone: {
        vi: 'Email',
    },
    password: {
        vi: 'Mật khẩu',
    },
    login: {
        vi: 'Đăng nhập',
    },
    register: {
        vi: 'Đăng ký',
    },
    forgot_password: {
        vi: 'Quên mật khẩu',
    },
    wrong_username_or_password: {
        vi: 'Email hay mật khẩu không đúng.',
    },
    login_remember: {
        vi: 'Nhớ thông tin đăng nhập',
    },
};

if (typeof module == 'undefined' || typeof module.exports == 'undefined') {
    window.label = data;
} else {
    module.exports = data;
}