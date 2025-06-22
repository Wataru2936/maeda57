'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Clock,
  MessageCircle,
  Award,
  Users,
  Dumbbell,
  Target,
  Star,
  Building,
  BookOpen,
  Sparkles,
  Trophy,
  Camera
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-warm-white overflow-hidden">
      {/* ヒーローセクション */}
      <section className="hero-gradient relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* 背景装飾 */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gold/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="mb-8"
              {...floatAnimation}
            >
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold animate-pulse-soft" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-black mb-8 text-shadow"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="gradient-text block">MAEDA</span>
              <span className="gradient-text block">TAKUHO</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block glass-effect rounded-2xl px-8 py-4 mb-6">
                <p className="text-xl md:text-2xl font-semibold text-gold">
                  57th Anniversary Web
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-lg mb-8">
                <Calendar className="w-6 h-6 text-gold" />
                <span>2025年6月27日 57歳誕生日記念</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-shadow">
                🎉 Happy Birthday! 🎉
              </h2>
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 text-left">
                前田さん、お誕生日心よりお祝い申し上げます。<br/>
                これまでの輝かしいご経歴と温かいお人柄に敬意を表し、このたび特設サイトを制作させていただきました！
              </p>
              
              {/* 音声プレーヤー */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="mt-8"
              >
                <div className="glass-effect rounded-2xl p-6 inline-block">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="w-6 h-6 text-gold" />
                    <span className="text-lg font-semibold">お祝いメッセージ</span>
                  </div>
                  <audio 
                    id="birthday-audio"
                    controls 
                    className="w-full max-w-md mx-auto mb-4"
                    preload="metadata"
                  >
                    <source src="maeda.wav" type="audio/wav" />
                    お使いのブラウザは音声の再生に対応していません。
                  </audio>
                  <div className="flex gap-2 justify-center">
                    <button 
                      onClick={() => {
                        const audio = document.getElementById('birthday-audio') as HTMLAudioElement;
                        if (audio) audio.playbackRate = 1.5;
                      }}
                      className="px-3 py-1 bg-gold text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
                    >
                      1.5倍速
                    </button>
                    <button 
                      onClick={() => {
                        const audio = document.getElementById('birthday-audio') as HTMLAudioElement;
                        if (audio) audio.playbackRate = 2.0;
                      }}
                      className="px-3 py-1 bg-gold text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
                    >
                      2倍速
                    </button>
                    <button 
                      onClick={() => {
                        const audio = document.getElementById('birthday-audio') as HTMLAudioElement;
                        if (audio) audio.playbackRate = 1.0;
                      }}
                      className="px-3 py-1 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      通常
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* スクロール指示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* プロフィールセクション */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Trophy className="w-12 h-12 inline-block mr-4 text-gold" />
              Profile
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-navy-blue to-light-navy rounded-2xl flex items-center justify-center mr-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">生年月日</h3>
                </div>
                <p className="text-gray-700 font-semibold mb-2">1968年6月27日</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold to-yellow-400 rounded-2xl flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">居住地・出身</h3>
                </div>
                <p className="text-gray-700 font-semibold mb-2">現住所：福岡県福岡市南区</p>
                <p className="text-gray-700 font-semibold">出身地：佐賀県唐津市</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-navy-blue to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue">現職・肩書</h3>
                </div>
                <p className="text-gray-700 font-semibold mb-2">社会保険労務士法人プロフェス 代表社員</p>
                <p className="text-gray-700 font-semibold mb-2">特定社会保険労務士</p>
                <p className="text-gray-700 font-semibold">福岡大学経済学部 非常勤講師</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* キャリア・経歴セクション */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <BookOpen className="w-12 h-12 inline-block mr-4 text-gold" />
              Career Journey
            </motion.h2>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-navy-blue via-light-navy to-gold"></div>
                
                <motion.div variants={fadeInUp} className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-navy-blue to-light-navy rounded-full flex items-center justify-center shadow-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 glass-effect p-6 rounded-2xl flex-1">
                    <h3 className="text-2xl font-bold text-navy-blue mb-3">学歴</h3>
                    <p className="text-gray-700 mb-2">🏫 佐賀県立唐津東高等学校 卒業</p>
                    <p className="text-gray-700">🎓 立命館大学 法学部 法律学科 卒業</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 glass-effect p-6 rounded-2xl flex-1">
                    <h3 className="text-2xl font-bold text-navy-blue mb-3">極真空手時代</h3>
                    <p className="text-gray-700 mb-2">🥋 極真空手 黒帯（全日本選手経験あり）</p>
                    <p className="text-gray-700">🌏 海外指導員を目指すも挫折を経験</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 glass-effect p-6 rounded-2xl flex-1">
                    <h3 className="text-2xl font-bold text-navy-blue mb-3">資格取得・実務経験</h3>
                    <p className="text-gray-700 mb-2">⚖️ 司法試験・司法書士試験に挑戦</p>
                    <p className="text-gray-700 mb-2">🏢 企業総務で社会保険労務士資格を取得</p>
                    <p className="text-gray-700">📈 大手社労士事務所での実務経験を積む</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-8 glass-effect p-6 rounded-2xl flex-1">
                    <h3 className="text-2xl font-bold text-navy-blue mb-3">独立開業</h3>
                    <p className="text-gray-700 mb-2">🚀 2002年（平成14年）に独立開業</p>
                    <p className="text-gray-700 mb-2">👥 現在、6名体制（社労士4名）の事務所を運営</p>
                    <p className="text-gray-700">📊 年間3万人規模の労務管理を実施</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Camera className="w-12 h-12 inline-block mr-4 text-gold" />
              Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "kintore.jpg", alt: "トレーニング中の前田さん", title: "筋トレおじ" },
                { src: "tyomoranma.jpg", alt: "大盛りのご飯と前田さん", title: "白屋のご飯" },
                { src: "oryouri.jpg", alt: "お肉を披露する前田さん", title: "焼肉" },
                { src: "wataruapplewatch.jpg", alt: "息子さんと一緒の前田さん", title: "Hublotの約束" },
                { src: "karate.jpg", alt: "若き日の前田さん（空手）", title: "極真空手" },
                { src: "friend.jpg", alt: "友達", title: "友人との会" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="card-shadow glass-effect p-4 rounded-3xl overflow-hidden group"
                >
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue text-center mt-4">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* 活動紹介セクション */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Building className="w-12 h-12 inline-block mr-4 text-gold" />
              Activities
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "人事制度設計", desc: "評価制度・賃金制度の設計を通じて、企業の成長を支援", icon: "📊" },
                { title: "評価者研修", desc: "管理職向けの評価者研修で組織力向上をサポート", icon: "🎯" },
                { title: "就業規則策定", desc: "企業の実情に合わせた就業規則の作成・改定", icon: "📋" },
                { title: "リーダーシップ研修", desc: "医療・介護施設向けのリーダーシップ研修の実施", icon: "👑" },
                { title: "大学講師", desc: "福岡大学経済学部で人的資源管理論を担当", icon: "🎓" },
                { title: "労務管理", desc: "年間3万人規模の労務管理業務を担当", icon: "👥" }
              ].map((activity, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp} 
                  className="card-shadow glass-effect p-6 rounded-3xl text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy-blue">{activity.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{activity.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1日の流れセクション */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Clock className="w-12 h-12 inline-block mr-4 text-gold" />
              Daily Schedule
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { time: "10:00", activity: "クライアント先にて人事制度コンサルティング", color: "from-blue-500 to-blue-600" },
                { time: "12:00", activity: "事務所で昼食", color: "from-gold to-yellow-500" },
                { time: "13:30", activity: "リーダーシップ研修（講師）", color: "from-green-500 to-emerald-500" },
                { time: "17:00", activity: "帰社後、就業規則2本作成", color: "from-purple-500 to-purple-600" },
                { time: "19:00", activity: "帰宅", color: "from-red-500 to-pink-500" }
              ].map((schedule, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp} 
                  className="flex items-center card-shadow glass-effect p-6 rounded-3xl group"
                >
                  <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-r ${schedule.color} rounded-2xl flex items-center justify-center mr-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-blue mb-2">{schedule.time}</h3>
                    <p className="text-gray-700 text-lg">{schedule.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* プライベートセクション */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Target className="w-12 h-12 inline-block mr-4 text-gold" />
              Private Life
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue">スポーツジム</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  日々の運転・デスクワーク対策としてスポーツジムに通い中。
                  健康維持と体力づくりに励んでいます。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gold to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue">腹筋男子への道</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  &ldquo;今年中には&ldquo;腹筋男子&rdquo;に変身したい&rdquo;と笑顔で語る一面も。
                  目標に向かって努力を続けています。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ビジョン・メッセージセクション */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <MessageCircle className="w-12 h-12 inline-block mr-4 text-gold" />
              Vision & Message
            </motion.h2>

            <div className="space-y-12">
              <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-10 h-10 text-gold mr-4" />
                  <h3 className="text-2xl font-bold text-navy-blue">想い</h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  社会保険労務士は「通過点」のはずだったが、気づけばこの仕事にどっぷりと浸かっていた。
                </p>
                <p className="text-black leading-relaxed text-lg mt-4">
                  経営者の力になりたい――という思いから人事制度だけでなくマーケティング、経営戦略にも踏み込む。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-10 h-10 text-gold mr-4" />
                  <h3 className="text-2xl font-bold text-navy-blue">職場づくり</h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  プロフェスは「短所を矯正する場」ではなく「強みを伸ばす場」であり、 誰もが主役
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Heart className="w-10 h-10 text-gold mr-4" />
                  <h3 className="text-2xl font-bold text-navy-blue">採用観・若者への想い</h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  自分に自信がない人、過去を変えたい人に来てほしい。
                  僕自身もそうだった。だからこそ、感謝される仕事を通じて、
                  自信と未来を手にしてほしい。
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-10 h-10 text-gold mr-4" />
                  <h3 className="text-2xl font-bold text-navy-blue">将来ビジョン</h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  社労士という仕事に、もっと希望と誇りを。
                  10年後には&ldquo;小学生がなりたい職業ベスト10&rdquo;に社会保険労務士が入るような
                  未来を本気で目指しています。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 関連リンク集セクション */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-navy-blue"
            >
              <Star className="w-12 h-12 inline-block mr-4 text-gold" />
              Related Links
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* プロフェス公式サイト */}
              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-navy-blue to-light-navy rounded-2xl flex items-center justify-center mr-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue">社会保険労務士法人プロフェス</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  前田さんが代表を務める社会保険労務士法人プロフェスの公式サイトです。
                  人事制度設計、評価者研修、就業規則策定など、幅広いサービスを提供しています。
                </p>
                <a 
                  href="https://www.sr-profess.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-blue to-light-navy text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>公式サイトを見る</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>

              {/* YouTube動画 */}
              <motion.div variants={fadeInUp} className="card-shadow glass-effect p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-blue">YouTube動画</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  前田さんの活動や想いを紹介する動画をご覧いただけます。
                </p>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/9Qf8enedsQk?si=mbGIbXh4pTOXwzTz"
                    title="前田拓邦さん紹介動画"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* フッターセクション */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-16 h-16 text-gold" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">
              前田拓邦さん、お誕生日おめでとうございます！
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              これからも末永くお元気で、ますますのご活躍をお祈り申し上げます。
            </p>
          </motion.div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              &copy; 2025 MAEDA TAKUHO 57th Anniversary Web
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
