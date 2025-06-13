import { FiVideo, FiZap, FiSmile, FiDownload } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "AI-Powered Video Analysis",
        description: "Let advanced AI transcribe, analyze, and understand your video content in seconds.",
        bullets: [
            {
                title: "Automatic Transcription",
                description: "Instantly convert your video's audio to text for deeper analysis.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Key Topic Detection",
                description: "Identify the main topics and themes in your content with a single click.",
                icon: <FiZap size={26} />
            },
            {
                title: "Sentiment & Tone Analysis",
                description: "Understand the mood and style of your video to craft the perfect hook.",
                icon: <FiSmile size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Generate Viral Hooks Instantly",
        description: "Get AI-generated, high-converting hooks tailored for YouTube Shorts, TikTok, and Instagram Reels.",
        bullets: [
            {
                title: "Proven Hook Formulas",
                description: "Choose from curiosity, surprise, or direct address hooks to maximize engagement.",
                icon: <FiZap size={26} />
            },
            {
                title: "Custom & AI Suggestions",
                description: "Edit, add, or generate new hooks with a click—no creative block!",
                icon: <FiSmile size={26} />
            },
            {
                title: "Preview & Compare",
                description: "See how different hooks change your video's impact before exporting.",
                icon: <FiVideo size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Export & Share Results Effortlessly",
        description: "Download your new video versions or share them directly to your favorite platforms.",
        bullets: [
            {
                title: "One-Click Export",
                description: "Save your hooked videos in high quality, ready for upload.",
                icon: <FiDownload size={26} />
            },
            {
                title: "Multiple Formats Supported",
                description: "MP4, MOV, AVI and more—optimized for social media.",
                icon: <FiVideo size={26} />
            },
            {
                title: "Share Instantly",
                description: "Send your results to collaborators or post directly from the app.",
                icon: <FiZap size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]