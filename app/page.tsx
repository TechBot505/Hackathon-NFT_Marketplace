"use client";

import React, { useState, useEffect } from "react";
import { Underdog } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Wallet, FileUp, List, User, Heart, BadgeDollarSign } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const underdog = Underdog({
  subsets: ["latin"],
  weight: ["400"],
});

const featuredCollections = [
  {
    id: 1,
    name: "Angry Doll #1",
    creator: "Puppets",
    image:
      "https://img.freepik.com/free-vector/flat-design-thug-life-sunglasses-illustration_23-2150209331.jpg?t=st=1744230394~exp=1744233994~hmac=d689b5bb4ec455de24ab66624b3365dce281eae94d108487c097b7c6ca4facee&w=1380",
    price: "1.23",
  },
  {
    id: 2,
    name: "Weedy #2",
    creator: "VX",
    image:
      "https://img.freepik.com/premium-vector/pixel-planet-concept_118813-3459.jpg?w=1380",
    price: "0.89",
  },
  {
    id: 3,
    name: "Creative #3",
    creator: "Artsy",
    image:
      "https://img.freepik.com/free-vector/flat-design-thug-life-sunglasses-illustration_23-2150209328.jpg?t=st=1744230358~exp=1744233958~hmac=92d88acfc11ca73df4fdac90e1b7ed8bb5b5a50c63307b6aaf40f2b2be367ac4&w=1380",
    price: "2.34",
  },
];

const createSellImages = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-vector/robot-character-nft-artwork-pixel-art-vector-illustration_153454-1339.jpg",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-vector/cute-robot-with-camera-pixel-art-style_534389-262.jpg",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/premium-vector/anime-boy-character-nft-pixel-art-illustration_621218-374.jpg",
  },
];

const topSellers = [
  {
    id: 1,
    name: "@RichHunter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    amount: "475.55",
  },
  {
    id: 2,
    name: "@BitCollector",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    amount: "421.83",
  },
  {
    id: 3,
    name: "@CryptoWiz",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    amount: "321.51",
  },
  {
    id: 4,
    name: "@NFTQueen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    amount: "276.93",
  },
  {
    id: 5,
    name: "@ArtDragon",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    amount: "245.45",
  },
  {
    id: 6,
    name: "@PixelMaster",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    amount: "190.88",
  },
  {
    id: 7,
    name: "@Web3Guru",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    amount: "178.16",
  },
  {
    id: 8,
    name: "@MetaMogul",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    amount: "122.39",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [nftData, setNftData] = useState([
    {
      id: 1,
      name: "GreenDino",
      creator: "Monkey",
      price: "0.045",
      image:
        "https://img.freepik.com/premium-vector/8-bit-pixel-trex-dinosaurs-animals-vector-illustrations-cross-stitch-patterns_614713-427.jpg?w=1380",
      likes: 435,
    },
    {
      id: 2,
      name: "BubblyPuppy",
      creator: "BearGuy",
      price: "0.067",
      image:
        "https://img.freepik.com/premium-vector/8-bit-pixel-sitting-puppy-animals-asset-games-vector-illustrations-cross-stitch-pattern_614713-186.jpg?w=1380",
      likes: 312,
    },
    {
      id: 3,
      name: "CoolTortoise",
      creator: "CryptoArt",
      price: "0.053",
      image:
        "https://img.freepik.com/premium-vector/8-bit-pixel-turtle-saw-plant-animal-pixels-vector-illustration-cross-stitch-pattern_614713-918.jpg?w=1380",
      likes: 278,
    },
    {
      id: 4,
      name: "Spacer",
      creator: "GalaxyNFT",
      price: "0.075",
      image:
        "https://img.freepik.com/premium-vector/astronaut-pixel-art-style_475147-362.jpg",
      likes: 341,
    },
    {
      id: 5,
      name: "SunRabbit",
      creator: "CoolCat",
      price: "0.062",
      image:
        "https://img.freepik.com/premium-vector/8-bit-pixels-rabbit-animals-game-assets-cross-stitch-patterns-vector-illustrations_614713-776.jpg?w=1380",
      likes: 411,
    },
    {
      id: 6,
      name: "Boba",
      creator: "PixelWorld",
      price: "0.043",
      image:
        "https://img.freepik.com/premium-vector/pixel-8-bit-giraffe-animals-game-assets-cross-stitch-pattern-vector-illustration_614713-585.jpg?w=1380",
      likes: 250,
    },
    {
      id: 7,
      name: "WizardCat",
      creator: "CatMagic",
      price: "0.058",
      image:
        "https://img.freepik.com/premium-vector/8bit-pixel-cute-monster-illustration-pixel-art-vector-cute-creature-doodle-set_614713-1152.jpg?w=1380",
      likes: 325,
    },
    {
      id: 8,
      name: "FoxNinja",
      creator: "ForestNFT",
      price: "0.061",
      image:
        "https://img.freepik.com/premium-vector/8bit-pixel-fox-animal-vector-illustration-cross-stitch-game-assets_614713-512.jpg?w=1380",
      likes: 289,
    },
  ]);
  const [filteredNftData, setFilteredNftData] = useState<
    {
      id: number;
      name: string;
      creator: string;
      price: string;
      image: string;
      likes: number;
    }[]
  >([]);

  const [userProfile, setUserProfile] = useState({
    profileImage: "https://example.com/default-profile.jpg",
    username: "DefaultUser",
    favoriteNft: 1,
  });

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [bids, setBids] = useState([
    { id: 1, username: "User1", collectionId: 1, amount: "1.5" },
    { id: 2, username: "User2", collectionId: 2, amount: "0.9" },
    { id: 3, username: "User3", collectionId: 3, amount: "2.5" },
  ]);

  useEffect(() => {
    if (activeTab === "All") {
      setFilteredNftData(nftData);
    } else {
      const filtered = nftData.filter(() => Math.random() > 0.5);
      setFilteredNftData(filtered);
    }
  }, [activeTab, nftData]);
  const [newNft, setNewNft] = useState({
    name: "",
    price: "",
    image: "",
    creator: "",
  });

  const [showBidModal, setShowBidModal] = useState(false);
  interface Collection {
    id: number;
    name: string;
    creator: string;
    price: string;
    image: string;
  }

  const [currentCollection, setCurrentCollection] = useState<Collection | null>(
    null
  );
  const [bidAmount, setBidAmount] = useState("");
  const [biddedCollections, setBiddedCollections] = useState<
    Record<number, string>
  >({});

  const marketplaceRef = React.useRef(null);
  const featuredCollectionRef = React.useRef(null);
  const createSellRef = React.useRef(null);
  const footerRef = React.useRef(null);
  const leaderboardRef = React.useRef(null);
  const chartRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  interface SectionRef {
    current: HTMLElement | null;
  }

  const scrollToSection = (ref: SectionRef): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const topBids = [...bids]
    .sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount))
    .slice(0, 5);

  const chartData = nftData.map((nft) => ({
    name: nft.name,
    likes: nft.likes,
  }));

  return (
    <main className={`${underdog.className} ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full blur-[120px]"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-blue-300 dark:bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-60 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <motion.header
          className={`fixed top-0 w-full z-50 ${
            isScrolled
              ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-sm"
              : "backdrop-blur-md bg-white/30 dark:bg-gray-900/30"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="flex md:mr-40 items-center space-x-2">
                <BadgeDollarSign size={28} className="text-indigo-600 dark:text-indigo-400" />
                <motion.h1
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  NFTer
                  <span className="text-indigo-600 dark:text-indigo-400">.</span>
                </motion.h1>
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(marketplaceRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Marketplace
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(chartRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Likes Chart
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(featuredCollectionRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Featured Collection
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(leaderboardRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Leaderboard
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(createSellRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Top Sellers
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(footerRef);
                  }}
                  className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  Contact
                </motion.button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.button
                onClick={() => setShowProfileModal(true)}
                className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User size={18} />
              </motion.button>

              <motion.button
                onClick={() => setShowCreateModal(true)}
                className="cursor-pointer px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create
              </motion.button>
            </div>
          </div>
        </motion.header>

        <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-lg"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Discover, and collect Digital Art{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  NFTs
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                NFT marketplace for crypto collectors to buy, trade, and create
                digital art. Eligible brands NFTs Buy, Sell...
              </p>
              <motion.button
                onClick={() => scrollToSection(marketplaceRef)}
                className={
                  "px-6 py-3 bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white rounded-full text-base font-medium transition duration-300 mr-4"
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Now
              </motion.button>

              <div className="mt-12 flex space-x-6 md:space-x-12">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    94K+
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Artwork
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    15K+
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Auction
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    25K+
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Artists
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:block relative w-full h-full">
              <motion.div
                className="absolute right-20 w-64 md:w-108 rounded-2xl overflow-hidden shadow-2xl z-20 bg-white dark:bg-gray-800"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="p-2 cursor-pointer">
                  <img
                    src="https://img.freepik.com/free-vector/circle-made-wavy-lines_1217-1596.jpg?t=st=1744230673~exp=1744234273~hmac=0e87014af32464455dfd458283ee23c8b5d639efcc91b823c5a35ad077aeb5ec&w=1380"
                    alt="Featured NFT"
                    width={500}
                    height={400}
                    className="rounded-xl"
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Rainbow VR
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Current Bid
                      </span>
                      <div className="flex items-center">
                        <span className="text-xs mr-1 text-gray-500 dark:text-gray-400">
                          Price:
                        </span>
                        <span className="font-bold text-sm text-gray-900 dark:text-white">
                          0.25 ETH
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                          <span className="text-xs text-white">JM</span>
                        </div>
                        <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
                          @johndoe
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        1 of 1
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          ref={marketplaceRef}
          className="py-16 px-4 md:px-8 lg:px-16 relative z-10"
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Discover more NFTs
              </motion.h2>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[
                "All",
                "Art",
                "Celebrities",
                "Gaming",
                "Sport",
                "Music",
                "Crypto",
              ].map((tab) => (
                <motion.button
                  key={tab}
                  className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {filteredNftData.map((nft) => (
                <motion.div
                  key={nft.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={cardAnimation}
                  whileHover="hover"
                >
                  <div className="p-3">
                    <div className="relative">
                      <img
                        src={nft.image}
                        alt={nft.name}
                        width={400}
                        height={400}
                        className="rounded-xl w-full h-56 object-cover"
                      />
                    </div>
                    <div className="pt-3">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {nft.name}
                        </h3>
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {nft.price} ETH
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-xs text-indigo-600">C</span>
                          </div>
                          <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
                            @{nft.creator}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          1 of 1
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <motion.button
                            onClick={() => {
                              setNftData(
                                nftData.map((n) =>
                                  n.id === nft.id
                                    ? { ...n, likes: n.likes + 1 }
                                    : n
                                )
                              );
                            }}
                            className="p-1 cursor-pointer rounded-full hover:bg-red-200 dark:hover:bg-red-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart
                              size={18}
                              className="text-gray-500 dark:text-gray-400"
                            />
                          </motion.button>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {nft.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section ref={chartRef} className="py-16 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="container mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              NFT Likes Distribution
            </motion.h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="likes" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section
          ref={featuredCollectionRef}
          className="py-16 px-4 md:px-8 lg:px-16 relative z-10"
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Collections
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  className="bg-gradient-to-br from-pink-500 to-purple-600 p-0.5 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="bg-black rounded-2xl overflow-hidden p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-xs text-white">
                          {collection.creator.charAt(0)}
                        </span>
                      </div>
                      <h3 className="ml-2 font-bold text-white">
                        {collection.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">
                      Created by super_nft_creator
                    </p>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      width={400}
                      height={400}
                      className="rounded-xl w-full h-80 object-cover mb-3"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Price</span>
                      <span className="font-bold text-white">
                        {collection.price} ETH
                      </span>
                    </div>
                    <motion.button
                      onClick={() => {
                        if (!biddedCollections[collection.id]) {
                          setCurrentCollection(collection);
                          setShowBidModal(true);
                        }
                      }}
                      className={`w-full hover:scale-105 cursor-pointer mt-3 py-2 ${
                        biddedCollections[collection.id]
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      } text-white rounded-lg text-sm font-medium transition duration-300`}
                      whileTap={
                        !biddedCollections[collection.id] ? { scale: 0.95 } : {}
                      }
                      disabled={!!biddedCollections[collection.id]}
                    >
                      {biddedCollections[collection.id]
                        ? `Bidded - ${biddedCollections[collection.id]} ETH`
                        : "Place Bid"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={leaderboardRef} className="py-16 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="container mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Top Bids of the Day
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topBids.map((bid) => {
                const collection = featuredCollections.find(
                  (c) => c.id === bid.collectionId
                );
                return (
                  <motion.div
                    key={bid.id}
                    className="bg-white dark:bg-gray-800 hover:scale-110 rounded-2xl overflow-hidden shadow-md p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-indigo-600">
                          {bid.username[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {bid.username}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {collection?.name || "Unknown Collection"}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                          {bid.amount} ETH
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="py-16 px-4 md:px-8 lg:px-16 bg-indigo-600 dark:bg-indigo-900 relative z-10"
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Create And Sell Your NFTs
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-5">
                  <Wallet size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Set up your wallet
                </h3>
                <p className="text-sm text-indigo-200">
                  Create, set up your crypto wallet or connect an existing one
                  through our safe and secure gateway.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-5">
                  <FileUp size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Create your collection
                </h3>
                <p className="text-sm text-indigo-200">
                  Upload your work and setup your collection with descriptions,
                  properties and customize options.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-5">
                  <List size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  List them for sale
                </h3>
                <p className="text-sm text-indigo-200">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You decide how you want to sell.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={createSellRef} className="py-16 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Top Sellers
              </motion.h2>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {topSellers.map((seller, index) => (
                <motion.div
                  key={seller.id}
                  className="flex items-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={cardAnimation}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={seller.avatar}
                        alt={seller.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-gray-100 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center border border-white dark:border-gray-800">
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-300">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm text-gray-900 dark:text-white">
                      {seller.name}
                    </p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400">
                      ${seller.amount}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 relative z-10">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to start your NFT journey?
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Join thousands of artists and collectors in the world's largest
                NFT marketplace.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.button
                  onClick={() => setShowCreateModal(true)}
                  className="px-8 cursor-pointer py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-base font-medium transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Creating
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection(createSellRef)}
                  className="px-8 cursor-pointer py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full text-base font-medium transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        <footer
          ref={footerRef}
          className="pt-16 pb-8 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-950 relative z-10"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  NFTer
                  <span className="text-indigo-600 dark:text-indigo-400">
                    .
                  </span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  The world's first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs).
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Marketplace
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      All NFTs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Art
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Virtual Worlds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Collectibles
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                  © 2025 NFTer. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <motion.div
          className="fixed bottom-6 right-6 z-50 md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            className="w-14 cursor-pointer h-14 rounded-full bg-indigo-600 shadow-lg flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <List size={24} />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-transparent backdrop-blur-xl bg-opacity-60"
              onClick={() => setShowCreateModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="relative w-full max-w-md p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Create New NFT
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    NFT Name
                  </label>
                  <input
                    type="text"
                    value={newNft.name}
                    onChange={(e) =>
                      setNewNft({ ...newNft, name: e.target.value })
                    }
                    className="w-full px-3 py-2 dark:text-gray-100 bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter NFT name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Creator Name
                  </label>
                  <input
                    type="text"
                    value={newNft.creator}
                    onChange={(e) =>
                      setNewNft({ ...newNft, creator: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white/70 dark:text-gray-100 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your creator name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Price (ETH)
                  </label>
                  <input
                    type="text"
                    value={newNft.price}
                    onChange={(e) =>
                      setNewNft({ ...newNft, price: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white/70 dark:text-gray-100 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="0.05"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={newNft.image}
                    onChange={(e) =>
                      setNewNft({ ...newNft, image: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white/70 dark:text-gray-100 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    onClick={() => {
                      if (
                        newNft.name &&
                        newNft.price &&
                        newNft.image &&
                        newNft.creator
                      ) {
                        setNftData([
                          {
                            id: nftData.length + 1,
                            name: newNft.name,
                            creator: newNft.creator,
                            price: newNft.price,
                            image: newNft.image,
                            likes: Math.floor(Math.random() * 200) + 100,
                          },
                          ...nftData,
                        ]);
                        setNewNft({
                          name: "",
                          price: "",
                          image: "",
                          creator: "",
                        });
                        setShowCreateModal(false);
                      }
                    }}
                    className={
                      "flex-1 cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition duration-300"
                    }
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Create NFT
                  </motion.button>
                  <motion.button
                    onClick={() => setShowCreateModal(false)}
                    className={
                      "px-4 cursor-pointer py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition duration-300"
                    }
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBidModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-transparent backdrop-blur-xl bg-opacity-60"
              onClick={() => setShowBidModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="relative w-full max-w-md p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Place a Bid
              </h2>

              {currentCollection && (
                <div className="mb-4 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={currentCollection.image}
                      alt={currentCollection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {currentCollection.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Created by {currentCollection.creator}
                    </p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      Current price: {currentCollection.price} ETH
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bid Amount (ETH)
                  </label>
                  <input
                    type="text"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full px-3 py-2 dark:text-gray-100 bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={`Minimum ${currentCollection?.price} ETH`}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Your bid must be higher than the current price
                  </p>
                </div>

                <div className="flex space-x-3 pt-4">
                  <motion.button
                    onClick={() => {
                      if (
                        bidAmount &&
                        currentCollection?.price &&
                        parseFloat(bidAmount) >
                          parseFloat(currentCollection.price)
                      ) {
                        const newBid = {
                          id: bids.length + 1,
                          username: userProfile.username,
                          collectionId: currentCollection.id,
                          amount: bidAmount,
                        };
                        setBids([...bids, newBid]);
                        setBiddedCollections({
                          ...biddedCollections,
                          [currentCollection.id]: bidAmount,
                        });
                        setBidAmount("");
                        setShowBidModal(false);
                      }
                    }}
                    className={`flex-1 cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition duration-300`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Confirm Bid
                  </motion.button>
                  <motion.button
                    onClick={() => setShowBidModal(false)}
                    className={`px-4 cursor-pointer py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition duration-300`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-transparent backdrop-blur-xl bg-opacity-60"
              onClick={() => setShowProfileModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="relative w-full max-w-md p-6 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 shadow-xl"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Edit Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    value={userProfile.profileImage}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        profileImage: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 dark:text-gray-100 bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/profile.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={userProfile.username}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        username: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 dark:text-gray-100 bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Favorite NFT
                  </label>
                  <select
                    value={userProfile.favoriteNft}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        favoriteNft: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 dark:text-gray-100 bg-white/70 dark:bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {nftData.map((nft) => (
                      <option key={nft.id} value={nft.id}>
                        {nft.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    onClick={() => setShowProfileModal(false)}
                    className="flex-1 cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Update
                  </motion.button>
                  <motion.button
                    onClick={() => setShowProfileModal(false)}
                    className="px-4 cursor-pointer py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
