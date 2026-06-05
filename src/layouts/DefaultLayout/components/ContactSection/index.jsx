import heroImage from "@/assets/images/cta-image.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-10 relative w-full h-[400px] overflow-hidden rounded-3xl select-none"
    >
      <div className="mx-auto relative w-full h-full">
        {/* Background image zoom nhẹ */}
        <motion.img
          src={heroImage}
          alt="Hero"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="w-full flex flex-col items-start gap-3 absolute top-2/4 inset-10 -translate-y-1/2"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white leading-snug"
          >
            Cần hỗ trợ? Chúng tôi luôn sẵn sàng giúp đỡ bạn.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xl text-white font-semibold leading-snug"
          >
            Xin vui lòng liên hệ với chúng tôi qua email.
          </motion.p>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="px-12 py-8 mt-5 bg-gray-200 font-sans text-xl text-black"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dagger241004abc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              Liên hệ Admin
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
