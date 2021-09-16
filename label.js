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

    error_api_general: {
        vi: 'Hệ thống gặp lỗi {0}.\nXin vui lòng thử lại sau!',
    },

    send_email_confirm_code: {
        vi: 'Gửi mã.',
    },
    require_password_strong: {
        vi: 'Mật khẩu cần ít nhất 8 ký tự, ít nhất 1 chữ thường, 1 chữ hoa, 1 số và 1 ký tự đặc biệt.',
    },

    require_email_taken: {
        vi: 'Email đã được sử dụng cho tài khoản khác.',
    },
    require_email_confirm: {
        vi: 'Nhập mã xác nhận email. Nếu bạn chưa có, bấm nút "Gửi mã" và kiểm hộp thư liên quan.',
    },

    welcome_new_registered_user: {
        vi: 'Xin chào mừng quý khách đã gia nhập cộng đồng happynessfunds.com. Chúng tôi luôn cố gắng hết mình để quý khách có được những trải nghiệm mua sắm tuyệt vời nhất.',
    },
    continue: {
        vi: 'Tiếp tục',
    },

    title_register: {
        vi: 'Đăng ký tài khoản phổ thông',
    },
};

if (typeof module == 'undefined' || typeof module.exports == 'undefined') {
    window.label = data;
} else {
    module.exports = data;
}