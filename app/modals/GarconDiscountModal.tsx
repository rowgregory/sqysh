import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Utensils } from "lucide-react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { setCloseGarconModal } from "../redux/features/appslice";
import Picture from "../components/common/Picture";

const GarconDiscountModal = () => {
  const { garconModal } = useAppSelector((state: RootState) => state.app);
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(setCloseGarconModal());

  return (
    <>
      <AnimatePresence>
        {garconModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Header with gradient background */}
              <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white p-8 text-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 opacity-10"
                >
                  <Utensils size={120} />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Picture
                      src="/images/garcon-pizza-man.png"
                      className="w-full h-full object-contain"
                      priority={false}
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Special Offer!</h1>
                  <p className="text-red-100 text-lg">
                    Welcome to Garçon SuperSlice
                  </p>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center mb-8"
                >
                  <div className="text-6xl font-bold text-red-600 mb-2">
                    10%
                  </div>
                  <div className="text-2xl font-semibold text-gray-800 mb-3">
                    OFF
                  </div>
                  <p className="text-gray-600 text-lg">Anything on our menu!</p>
                  <p className="text-gray-500 text-sm mt-3">
                    Show this screen when you order
                  </p>
                </motion.div>

                {/* Date Display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gray-100 rounded-2xl p-4 mb-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Valid today only
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-sm text-gray-500"
                >
                  Show this screen when ordering
                </motion.p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-200 rounded-full opacity-20"></div>
              <div className="absolute -top-4 left-1/3 w-8 h-8 bg-red-300 rounded-full opacity-30"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GarconDiscountModal;
