import { createKcPageStory, type Meta, type StoryObj } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        kcContext: {
            "x-keycloakify": {
                messages: {
                    termsText: `<p style="color:#6b7280;font-size:14px;margin:8px 0;">Last updated: Jan 7, 2026</p><p style="margin:8px 0;">By accessing or using this Single Sign-On (“SSO”) service (the “Service”), you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree to these Terms, do not use the Service.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">1. Purpose of the Service</h2><p style="margin:8px 0;">The Service provides authentication and identity management for accessing related applications and services. A single account may be used to sign in across multiple connected products.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">2. Account Responsibility</h2><p style="margin:8px 0;">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><ul style="margin:8px 0 8px 20px;"><li>Provide accurate and current information when creating an account</li><li>Notify us immediately of any unauthorized use of your account</li><li>Use the Service only for lawful purposes</li></ul><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">3. Acceptable Use</h2><p style="margin:8px 0;">You agree not to:</p><ul style="margin:8px 0 8px 20px;"><li>Attempt to gain unauthorized access to the Service or related systems</li><li>Interfere with or disrupt the integrity or performance of the Service</li><li>Use the Service to violate any applicable laws or regulations</li></ul><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">4. Data and Privacy</h2><p style="margin:8px 0;">The Service may collect and process information necessary for authentication, security, and account management purposes.</p><p style="margin:8px 0;">Use of the Service is also subject to our <strong>Privacy Policy</strong>.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">5. Service Availability</h2><p style="margin:8px 0;">The Service is provided on an “as is” and “as available” basis. We do not guarantee uninterrupted or error-free operation and reserve the right to modify or discontinue the Service at any time.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">6. Termination</h2><p style="margin:8px 0;">We may suspend or terminate your access to the Service at any time if you violate these Terms or if required for security or legal reasons.</p><p style="margin:8px 0;">You may stop using the Service at any time.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">7. Limitation of Liability</h2><p style="margin:8px 0;">To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use the Service.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">8. Changes to These Terms</h2><p style="margin:8px 0;">We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">9. Governing Law</h2><p style="margin:8px 0;">These Terms are governed by and construed in accordance with the applicable laws of the relevant jurisdiction, without regard to conflict of law principles.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">10. Contact</h2><p style="margin:8px 0;">If you have any questions about these Terms, please contact us at: <br><strong>supports@yanceyleo.com</strong></p>`
                }
            }
        }
    }
};

export const Arabic: Story = {
    args: {
        kcContext: {
            locale: {
                currentLanguageTag: "ar",
                rtl: true
            },
            "x-keycloakify": {
                messages: {
                    termsText: "<p>شروطي باللغة <strong>العربية</strong></p>"
                }
            }
        }
    }
};
export const French: Story = {
    args: {
        kcContext: {
            locale: {
                currentLanguageTag: "fr"
            },
            "x-keycloakify": {
                // cSpell: disable
                messages: {
                    termsText: "<p>Mes terme en <strong>Français</strong></p>"
                }
                // cSpell: enable
            }
        }
    }
};

export const Spanish: Story = {
    args: {
        kcContext: {
            locale: {
                currentLanguageTag: "es"
            },
            "x-keycloakify": {
                messages: {
                    termsText: "<p>Mis términos en <strong>Español</strong></p>"
                }
            }
        }
    }
};

export const LongMessage: Story = {
    args: {
        kcContext: {
            "x-keycloakify": {
                messages: {
                    termsText: `<p style="color:#6b7280;font-size:14px;margin:8px 0;">Last updated: Jan 7, 2026</p><p style="margin:8px 0;">By accessing or using this Single Sign-On (“SSO”) service (the “Service”), you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree to these Terms, do not use the Service.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">1. Purpose of the Service</h2><p style="margin:8px 0;">The Service provides authentication and identity management for accessing related applications and services. A single account may be used to sign in across multiple connected products.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">2. Account Responsibility</h2><p style="margin:8px 0;">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p><ul style="margin:8px 0 8px 20px;"><li>Provide accurate and current information when creating an account</li><li>Notify us immediately of any unauthorized use of your account</li><li>Use the Service only for lawful purposes</li></ul><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">3. Acceptable Use</h2><p style="margin:8px 0;">You agree not to:</p><ul style="margin:8px 0 8px 20px;"><li>Attempt to gain unauthorized access to the Service or related systems</li><li>Interfere with or disrupt the integrity or performance of the Service</li><li>Use the Service to violate any applicable laws or regulations</li></ul><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">4. Data and Privacy</h2><p style="margin:8px 0;">The Service may collect and process information necessary for authentication, security, and account management purposes.</p><p style="margin:8px 0;">Use of the Service is also subject to our <strong>Privacy Policy</strong>.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">5. Service Availability</h2><p style="margin:8px 0;">The Service is provided on an “as is” and “as available” basis. We do not guarantee uninterrupted or error-free operation and reserve the right to modify or discontinue the Service at any time.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">6. Termination</h2><p style="margin:8px 0;">We may suspend or terminate your access to the Service at any time if you violate these Terms or if required for security or legal reasons.</p><p style="margin:8px 0;">You may stop using the Service at any time.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">7. Limitation of Liability</h2><p style="margin:8px 0;">To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use the Service.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">8. Changes to These Terms</h2><p style="margin:8px 0;">We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">9. Governing Law</h2><p style="margin:8px 0;">These Terms are governed by and construed in accordance with the applicable laws of the relevant jurisdiction, without regard to conflict of law principles.</p><h2 style="font-size:18px;margin-top:24px;margin-bottom:8px;">10. Contact</h2><p style="margin:8px 0;">If you have any questions about these Terms, please contact us at: <br><strong>supports@yanceyleo.com</strong></p>`
                }
            }
        }
    }
};
