"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../../components/Container";
const page = () => {
  return (
    <Container className="section-container" tag="section">
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="rounded-full border-[2px] border-dashed border-[#fff] m-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="rounded-full border-[2px] border-dashed border-[#fff] m-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="rounded-full border-[2px] border-dashed border-[#fff] m-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="h-auto w-auto max-w-[50px] m-8">
                <Image
                  src="/AutomationRepetitiveTasks.svg"
                  height="50"
                  width="50"
                  layout="responsive"
                  alt="thumbnail"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default page;
