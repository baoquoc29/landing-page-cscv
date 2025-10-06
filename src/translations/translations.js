export const translations = {
    VN: {
        // Header
        nav: {
            overview: "TỔNG QUAN",
            schedule: "LỊCH TRÌNH",
            participants: "ĐỐI TƯỢNG THAM DỰ",
            mainActivities: "HOẠT ĐỘNG CHÍNH",
            sideActivities: "HOẠT ĐỘNG BÊN LỀ",
            contact: "THÔNG TIN LIÊN HỆ"
        },
        registerButton: "Đăng ký",
        // EventBanner
        banner: {
            title: "BANER SỰ KIỆN",
            registerCompetition: "Đăng ký dự thi",
            registerActivities: "Đăng ký tham gia các hoạt động bên lề"
        },
        // EventStats
        stats: {
            teams: "ĐỘI THI THAM DỰ",
            studentsOffline: "SINH VIÊN THAM DỰ OFFLINE",
            studentsReached: "TIẾP CẬN SINH VIÊN NGÀNH CNTT",
            views: "LƯỢT XEM TRÊN CÁC NỀN TẢNG",
            mediaArticles: "TIN BÀI BÁO CHÍ, TRUYỀN HÌNH",
            partners: "ĐƠN VỊ ĐỒNG HÀNH"
        },
        // EventIntro
        intro: {
            title: "CUỘC THI UY TÍN HÀNG ĐẦU VỀ AN NINH MẠNG CHO SINH VIÊN",
            description: "Cuộc thi Sinh viên An ninh mạng năm 2025 là sự kiện thường niên do Hiệp hội An ninh mạng quốc gia (NCA) chủ trì, với sự bảo trợ của Bộ Công an và Bộ Giáo dục và Đào tạo, phối hợp tổ chức cùng Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05), bên cạnh đó, cuộc thi có sự phối hợp, đồng hành của Trung ương Đoàn TNCS Hồ Chí Minh và Hội Sinh viên Việt Nam.",
            objectives: {
                awareness: {
                    title: "Nâng cao nhận thức:",
                    description: "Lan tỏa kiến thức an toàn dữ liệu, xây dựng văn hóa an ninh mạng."
                },
                skills: {
                    title: "Rèn luyện kỹ năng:",
                    description: "Trải nghiệm thực chiến, phát triển tư duy phản biện và sáng tạo."
                },
                talent: {
                    title: "Phát hiện nhân tài:",
                    description: "Tìm kiếm, nuôi dưỡng thế hệ chuyên gia an ninh mạng tương lai."
                },
                ecosystem: {
                    title: "Kết nối hệ sinh thái:",
                    description: "Liên kết giáo dục – doanh nghiệp – quốc gia, góp phần phát triển nhân lực chất lượng cao."
                }
            }
        },
        // EventTimeline
        timeline: {
            title: "LỊCH TRÌNH SỰ KIỆN",
            events: [
                {
                    title: "ĐĂNG KÝ",
                    date: "(25/09 - 12/10)",
                    desc: "Mở cổng đăng ký tham dự của các đội thi trên cả nước"
                },
                {
                    title: "SƠ KHẢO",
                    date: "(18/10/2025)",
                    desc: "Dự kiến 200 đội dự thi online tại các trường, chọn ra 20 - 30 tham dự thi Chung khảo"
                },
                {
                    title: "TRUYỀN THÔNG TẠI CÁC TRƯỜNG",
                    date: "(18/10 - 10/11)",
                    desc: "Chiến dịch truyền thông lan toả tại các trường có đội vào Chung khảo. Bản truyền thông kết nối, tìm kiếm cơ hội việc làm của đối tác đồng hành"
                },
                {
                    title: "CHUNG KHẢO",
                    date: "(15/11/2025)",
                    desc: "20 – 30 đội chia làm 02 bảng thi đấu, thi đấu trực tiếp tại Hà Nội và trao giải. Các hoạt động cổ vũ, tương tác, hướng nghiệp, hội thảo bên lề diễn ra song song"
                }
            ]
        },
        // Participants
        participants: {
            title: "ĐỐI TƯỢNG THAM DỰ",
            types: [
                {
                    title: "SINH VIÊN",
                    desc: "Sinh viên các trường đại học, học viện, cao đẳng trên toàn quốc có niềm đam mê, khả năng và kỹ năng trong lĩnh vực công nghệ thông tin, an ninh mạng."
                },
                {
                    title: "DOANH NGHIỆP",
                    desc: "Cuộc thi còn thu hút các doanh nghiệp từ nhiều lĩnh vực khác nhau như Công nghệ thông tin & Viễn thông, Ngân hàng – Tài chính – Chứng khoán, Sản xuất, Công nghiệp và các ngành dịch vụ khác."
                },
                {
                    title: "CƠ QUAN QUẢN LÝ NHÀ NƯỚC",
                    desc: "Cuộc thi là nơi truyền tải nhiều chủ trương và nội dung của các cơ quan quản lý nhà nước về công tác đảm bảo an toàn thông tin, đặc biệt là những vấn đề về định hướng chính sách công nghệ thông tin và an ninh mạng."
                }
            ]
        },
        // Main Activities
        mainActivities: {
            title: "HOẠT ĐỘNG CHÍNH",
            activities: [
                {
                    title: "VÒNG SƠ KHẢO",
                    date: "(18/10/2025)",
                    desc: `- Quy mô: 200 đội
- Hình thức: Thi online
- Thử thách theo chủ đề (jeopardy), gồm: Pwnable (Khai thác lỗi phần mềm, buffer overflow, format string, shellcode …); 
- Reverse engineering: tập trung vào kỹ năng dịch ngược mã nguồn phần mềm, cách unpack các packer, crypter bảo vệ phần mềm; 
- Web: Các kỹ thuật tấn công vào ứng dụng Web; 
- Crypto/ACM: Đánh đố giải mã, tấn công các thuật toán mã hóa, dùng kỹ năng lập trình/giải thuật để giải các trò chơi, mê cung ...`
                },
                {
                    title: "VÒNG CHUNG KHẢO",
                    date: "(15/11/2025)",
                    desc: `- Quy mô: 30 – 40 đội (Chọn từ Sơ khảo)
- Hình thức: Thi online và offline
- Chia thành 2 bảng thi:
  • Bảng A: Thi tấn công – phòng thủ trực tiếp (attack-defense) vào Trung tâm dữ liệu giả lập. Thi tập trung tại Hà Nội, các đội thi đấu nước ngoài kết nối thi online.
  • Bảng B: Thi Jeopardy: tất cả các đội thi online từ xa.`
                }
            ]
        },
        // Side Activities
        sideActivities: {
            title: " HOẠT ĐỘNG SONG SONG",
            subTitle: "Các hoạt động diễn ra song song với Vòng Chung Khảo ngày 15.11.2025",
            activities: [
                "TỌA ĐÀM HƯỚNG NGHIỆP",
                "ĐẶT BÀN TRUYỀN THÔNG",
                "HỘI CHỢ VIỆC LÀM & ĐÀO TẠO",
                "MINI GAME CÔNG NGHỆ"
            ]
        },
        // Footer
        footer: {
            sponsor: "Tài trợ / For Sponsor",
            organizers: "ĐƠN VỊ TỔ CHỨC",
            partnership: "Phụ trách Quảng cáo, truyền thông",
            sendEmail: "Gửi Email"
        },
        // Contact Section
        contact: {
            title: "THÔNG TIN LIÊN HỆ",
            organizers: "PHỐI HỢP TỔ CHỨC",
            sendInfo: "GỬI THÔNG TIN LIÊN HỆ",
            form: {
                fullName: "Họ tên",
                position: "Chức danh",
                organization: "Đơn vị (tổ chức)",
                phone: "Số điện thoại",
                email: "Địa chỉ email",
                content: "Nội dung",
                submit: "Gửi thông tin"
            }
        },
        // Registration Form
        registration: {
            title: "MẪU ĐĂNG KÝ",
            subtitle: "Vui lòng điền đầy đủ thông tin, các mục có dấu (*) là bắt buộc.",
            form: {
                prefix: "Danh xưng",
                prefixPlaceholder: "Ông / Bà",
                fullName: "Họ và Tên",
                fullNamePlaceholder: "Nguyễn Văn A",
                mobile: "Số điện thoại",
                mobilePlaceholder: "090xxxxxxx",
                email: "Địa chỉ Email",
                emailPlaceholder: "example@email.com",
                organization: "Tên tổ chức - Doanh nghiệp - Đại học",
                organizationPlaceholder: "Công ty / Đại học",
                jobTitle: "Chức vụ",
                jobTitlePlaceholder: "Quản lý / Sinh viên",
                department: "Phòng - Ban - Khoa - Viện",
                departmentPlaceholder: "Khoa Công nghệ thông tin",
                website: "Website tổ chức",
                websitePlaceholder: "https://example.com",
                industry: "Lĩnh vực hoạt động",
                industryPlaceholder: "Giáo dục / Công nghệ",
                consent: "Bằng cách đánh dấu, bạn đồng ý cung cấp thông tin cho BTC và nhận thông tin về sự kiện cũng như các hoạt động liên quan.",
                submit: "Gửi đăng ký",
                required: "*"
            }
        }
    },
    EN: {
        // Header
        nav: {
            overview: "OVERVIEW",
            schedule: "SCHEDULE",
            participants: "PARTICIPANTS",
            mainActivities: "MAIN ACTIVITIES",
            sideActivities: "SIDE ACTIVITIES",
            contact: "CONTACT INFORMATION"
        },
        registerButton: "Register",
        // EventBanner
        banner: {
            title: "EVENT BANNER",
            registerCompetition: "Register for Competition",
            registerActivities: "Register for Side Activities"
        },
        // EventStats
        stats: {
            teams: "PARTICIPATING TEAMS",
            studentsOffline: "STUDENTS ATTENDING OFFLINE",
            studentsReached: "IT STUDENTS REACHED",
            views: "VIEWS ON DIGITAL PLATFORMS",
            mediaArticles: "PRESS & MEDIA COVERAGE",
            partners: "PARTNER ORGANIZATIONS"
        },
        // EventIntro
        intro: {
            title: "THE LEADING PRESTIGIOUS CYBERSECURITY COMPETITION FOR STUDENTS",
            description: "The 2025 Cybersecurity Student Competition is an annual event organized by the National Cybersecurity Association (NCA), sponsored by the Ministry of Public Security and the Ministry of Education and Training, in coordination with the Cybersecurity and High-Tech Crime Prevention Department (A05). The competition is also supported by the Central Committee of the Ho Chi Minh Communist Youth Union and the Vietnam Student Association.",
            objectives: {
                awareness: {
                    title: "Raise Awareness:",
                    description: "Spread data security knowledge and build a cybersecurity culture."
                },
                skills: {
                    title: "Develop Skills:",
                    description: "Gain hands-on experience, develop critical thinking and creativity."
                },
                talent: {
                    title: "Discover Talent:",
                    description: "Identify and nurture the next generation of cybersecurity experts."
                },
                ecosystem: {
                    title: "Connect Ecosystem:",
                    description: "Link education – business – nation, contributing to high-quality human resource development."
                }
            }
        },
        // EventTimeline
        timeline: {
            title: "EVENT SCHEDULE",
            events: [
                {
                    title: "REGISTRATION",
                    date: "(25/09 - 12/10)",
                    desc: "Open registration for teams nationwide"
                },
                {
                    title: "PRELIMINARY ROUND",
                    date: "(18/10/2025)",
                    desc: "Approximately 200 teams compete online at their universities, selecting 20-30 teams for the Final Round"
                },
                {
                    title: "CAMPUS OUTREACH",
                    date: "(18/10 - 10/11)",
                    desc: "Outreach campaign at universities with teams advancing to the Final Round. Communications connecting and seeking employment opportunities from partners"
                },
                {
                    title: "FINAL ROUND",
                    date: "(15/11/2025)",
                    desc: "20-30 teams divided into 2 competition groups, competing directly in Hanoi and awards ceremony. Support activities, interactions, career guidance, and seminars take place simultaneously"
                }
            ]
        },
        // Participants
        participants: {
            title: "PARTICIPANTS",
            types: [
                {
                    title: "STUDENTS",
                    desc: "Students from universities, academies, and colleges nationwide with passion, ability, and skills in information technology and cybersecurity."
                },
                {
                    title: "ENTERPRISES",
                    desc: "The competition also attracts enterprises from various sectors such as Information Technology & Telecommunications, Banking - Finance - Securities, Manufacturing, Industry, and other service sectors."
                },
                {
                    title: "GOVERNMENT AGENCIES",
                    desc: "The competition is a platform to convey policies and content from government agencies on information security assurance, especially issues regarding information technology and cybersecurity policy orientation."
                }
            ]
        },
        // Main Activities
        mainActivities: {
            title: "MAIN ACTIVITIES",
            activities: [
                {
                    title: "PRELIMINARY ROUND",
                    date: "(18/10/2025)",
                    desc: `- Scale: 200 teams
- Format: Online competition
- Jeopardy-style challenges including: Pwnable (Software vulnerability exploitation, buffer overflow, format string, shellcode, etc.); 
- Reverse engineering: focusing on software source code reverse engineering skills, unpacking packers and crypters protecting software; 
- Web: Attack techniques on Web applications; 
- Crypto/ACM: Cryptography puzzles, cryptographic algorithm attacks, using programming/algorithm skills to solve games and mazes...`
                },
                {
                    title: "FINAL ROUND",
                    date: "(15/11/2025)",
                    desc: `- Scale: 30-40 teams (Selected from Preliminary Round)
- Format: Online and offline competition
- Divided into 2 competition groups:
  • Group A: Attack-defense competition directly on simulated data center. Competition centralized in Hanoi, foreign teams connect online.
  • Group B: Jeopardy competition: all teams compete online remotely.`
                }
            ]
        },
        // Side Activities
        sideActivities: {
            title: "SIDE ACTIVITIES",
            subTitle: "Activities taking place alongside the Final Round on 15.11.2025",
            activities: [
                "CAREER ORIENTATION TALKSHOW",
                "MEDIA BOOTH",
                "JOB & TRAINING FAIR",
                "TECHNOLOGY MINI GAMES"
            ]
        },
        // Footer
        footer: {
            sponsor: "Sponsor",
            organizers: "ORGANIZERS",
            partnership: "Advertising & Communications Manager",
            sendEmail: "Send Email"
        },
        // Contact Section
        contact: {
            title: "CONTACT INFORMATION",
            organizers: "CO-ORGANIZERS",
            sendInfo: "SEND CONTACT INFORMATION",
            form: {
                fullName: "Full Name",
                position: "Position",
                organization: "Organization",
                phone: "Phone Number",
                email: "Email Address",
                content: "Message",
                submit: "Send Information"
            }
        },
        // Registration Form
        registration: {
            title: "REGISTRATION FORM",
            subtitle: "Please complete this form. All fields marked with (*) are required.",
            form: {
                prefix: "Prefix",
                prefixPlaceholder: "Mr. / Ms.",
                fullName: "Full Name",
                fullNamePlaceholder: "John Doe",
                mobile: "Mobile",
                mobilePlaceholder: "090xxxxxxx",
                email: "Email Address",
                emailPlaceholder: "example@email.com",
                organization: "Organization - University Name",
                organizationPlaceholder: "Company / University",
                jobTitle: "Job Title",
                jobTitlePlaceholder: "Manager / Student",
                department: "Department",
                departmentPlaceholder: "IT Department",
                website: "Organization Website",
                websitePlaceholder: "https://example.com",
                industry: "Industry",
                industryPlaceholder: "Education / Technology",
                consent: "By ticking this box, you agree to allow the Organizer to hold and store your contact information and to receive information about the event and related activities.",
                submit: "Submit",
                required: "*"
            }
        }
    }
};
