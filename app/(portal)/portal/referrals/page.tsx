"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { IconUsers, IconEye, IconDownload } from "@/components/ui/Icons";

export default function PortalReferrals() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [referralCode, setReferralCode] = useState("REF2024DEMO");
  const [referralHistory, setReferralHistory] = useState([
    {
      id: 1,
      email: "friend@example.com",
      status: "Invited",
      date: "2024-01-15",
      reward: "Pending",
    },
    {
      id: 2,
      email: "colleague@example.com",
      status: "Joined",
      date: "2024-01-10",
      reward: "$25 Credit",
    },
    {
      id: 3,
      email: "family@example.com",
      status: "Invited",
      date: "2024-01-05",
      reward: "Pending",
    },
  ]);

  const handleInvite = () => {
    if (email.trim()) {
      (window as any).toast?.(`Invitation sent to ${email}`, {
        kind: "success",
        title: "Invite Sent",
      });
      setEmail("");
      setMessage("");
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    (window as any).toast?.("Referral code copied", { kind: "info" });
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Refer Friends & Earn Rewards
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Invite friends to join our platform and both of you will receive
          exclusive benefits
        </p>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-3">
              <IconUsers size={24} color="white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
              {referralHistory.length}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Referrals
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3">
              <IconEye size={24} color="white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
              {referralHistory.filter((r) => r.status === "Joined").length}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Successful Referrals
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-3">
              <IconDownload size={24} color="white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
              $75
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Earned
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Code Section */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Your Referral Code
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Share this code with friends to earn rewards when they join
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-700/50">
                <span className="text-2xl">🎯</span>
                <code className="text-lg sm:text-xl font-mono font-bold text-purple-700 dark:text-purple-300">
                  {referralCode}
                </code>
              </div>
            </div>
            <Button
              onClick={copyReferralCode}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              📋 Copy Code
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invite Friends Form */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Invite Friends
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Send personalized invitations to your friends and colleagues
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Friend&apos;s Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="friend@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Personal Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hey! I think you'd love this financial platform. Use my referral code for exclusive benefits!"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
            <Button
              onClick={handleInvite}
              disabled={!email.trim()}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              📧 Send Invitation
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Referral Rewards Info */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            How It Works
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">1️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Share Your Code
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send your unique referral code to friends via email or social
                media
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">2️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Friend Joins
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                When they sign up using your code, both accounts get activated
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                <span className="text-white text-2xl">3️⃣</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Earn Rewards
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Both you and your friend receive $25 in platform credits
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral History */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Referral History
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {referralHistory.map((referral) => (
              <div
                key={referral.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-lg bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/50 gap-3 sm:gap-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 text-xs sm:text-sm">👤</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {referral.email}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {referral.date}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      referral.status === "Joined"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}
                  >
                    {referral.status === "Joined" ? "✅" : "⏳"}{" "}
                    {referral.status}
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {referral.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
