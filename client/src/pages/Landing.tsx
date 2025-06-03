import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ArrowRight, 
  Star, 
  Users, 
  Building2, 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  TrendingUp, 
  Award,
  UserCheck,
  Crown,
  Settings,
  BarChart3,
  LogIn,
  Menu,
  X,
  CreditCard
} from "lucide-react";

export default function Landing() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginAs = (role: string) => {
    window.location.href = `/api/login?role=${role}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 animate-gradient-slow">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">Matbixx</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Özellikler</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Fiyatlar</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">İletişim</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                    <LogIn className="h-4 w-4 mr-2" />
                    Giriş Yap
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl p-0 bg-gradient-to-br from-gray-50 to-blue-50">
                  <DialogHeader className="p-6 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Matbixx'e Hoş Geldiniz
                        </DialogTitle>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">Hesap türünüzü seçin ve platformumuzun avantajlarından yararlanmaya başlayın</p>
                  </DialogHeader>

                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Customer Card */}
                      <Card className="relative overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                              Bireysel
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900 mt-3">
                            Müşteri Girişi
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            Baskı ihtiyaçlarınız için profesyonel çözümler
                          </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Hızlı teklif alma</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>AI destekli tasarım</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Sipariş takibi</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>7/24 destek</span>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleLoginAs('customer')}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Müşteri Olarak Giriş
                          </Button>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">
                              Hesabınız yok mu?{" "}
                              <button
                                onClick={() => {
                                  setIsLoginModalOpen(false);
                                  window.location.href = "/customer-register";
                                }}
                                className="text-blue-600 hover:text-blue-700 font-medium underline"
                              >
                                Kayıt Ol
                              </button>
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Printer Card */}
                      <Card className="relative overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Building2 className="h-6 w-6 text-orange-600" />
                            </div>
                            <Badge variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100">
                              İşletme
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900 mt-3">
                            Matbaa Girişi
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            İşinizi büyütün, daha fazla müşteriye ulaşın
                          </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Sipariş yönetimi</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Müşteri portföyü</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Gelişmiş analitik</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Premium destek</span>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleLoginAs('printer')}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Building2 className="h-4 w-4 mr-2" />
                            Matbaa Olarak Giriş
                          </Button>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">
                              Hesabınız yok mu?{" "}
                              <button
                                onClick={() => {
                                  setIsLoginModalOpen(false);
                                  window.location.href = "/printer-register";
                                }}
                                className="text-orange-600 hover:text-orange-700 font-medium underline"
                              >
                                Kayıt Ol
                              </button>
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Admin Card */}
                      <Card className="relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-45 translate-x-8 -translate-y-8"></div>
                        <div className="absolute top-2 left-2">
                          <Crown className="h-5 w-5 text-purple-600" />
                        </div>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Shield className="h-6 w-6 text-purple-600" />
                            </div>
                            <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                              VIP
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900 mt-3">
                            Yönetici Girişi
                          </CardTitle>
                          <p className="text-sm text-gray-600">
                            Platform yönetimi ve gelişmiş kontroller
                          </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Sistem yönetimi</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Kullanıcı kontrolü</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Raporlama araçları</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span>Tam yetki</span>
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleLoginAs('admin')}
                            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Shield className="h-4 w-4 mr-2" />
                            Yönetici Olarak Giriş
                          </Button>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">
                              Özel yetkili hesap gereklidir
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span>SSL ile güvenli giriş • Kişisel verileriniz korunur</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Menu className="h-4 w-4 mr-2" />
                     Menü
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem><a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Özellikler</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Fiyatlar</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">İletişim</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] bg-[size:80px_80px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] bg-[size:120px_120px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Buttons at Top */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => {
                try {
                  window.location.href = "/customer-register";
                } catch (error) {
                  console.error('Navigation error:', error);
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-12 py-5 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 rounded-xl border-0 animate-gradient-fast animate-float"
            >
              <Users className="h-6 w-6 mr-3" />
              Müşteri Olarak Başla
            </Button>
            <Button 
              onClick={() => {
                try {
                  window.location.href = "/printer-register";
                } catch (error) {
                  console.error('Navigation error:', error);
                }
              }}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 hover:border-white/30 font-bold px-12 py-5 text-lg shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:scale-105 rounded-xl animate-float-delayed"
            >
              <Building2 className="h-6 w-6 mr-3" />
              Matbaa Olarak Katıl
            </Button>
          </div>

          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/10">
              <Zap className="h-5 w-5 mr-3 text-yellow-400" />
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">Türkiye'nin En Yenilikçi B2B Matbaa Platformu</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient">
                Matbaa Sektöründe
              </span>
              <span className="block bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text text-transparent animate-gradient-fast">
                Dijital Devrim
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-16 leading-relaxed max-w-5xl mx-auto bg-gradient-to-r from-gray-200 to-blue-200 bg-clip-text text-transparent font-medium">
              <strong className="text-white">Matbixx</strong> ile matbaa işlerinizi dijitalleştirin. AI destekli tasarım, anlık teklif karşılaştırması, 
              güvenli ödeme ve gerçek zamanlı takip ile profesyonel baskı deneyimi yaşayın.
            </p>
          </div>

          {/* Live Quote Tracking Section */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl border border-white/20"></div>
            <div className="relative p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  🔴 Canlı Teklif Takibi
                </h3>
                <p className="text-blue-200 text-lg">Anlık olarak platform üzerindeki teklif durumları</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 animate-float">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-green-200 font-semibold">Onaylanan Teklifler</h4>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-green-300 mb-2">₺847.250</div>
                  <div className="text-sm text-green-200">Son 24 saatte: 23 teklif</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 animate-float-delayed">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-yellow-200 font-semibold">Bekleyen Teklifler</h4>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-yellow-300 mb-2">₺1.234.580</div>
                  <div className="text-sm text-yellow-200">Aktif: 47 teklif</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 animate-float">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-blue-200 font-semibold">Toplam İşlem Hacmi</h4>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-blue-300 mb-2">₺15.7M</div>
                  <div className="text-sm text-blue-200">Bu ay: +34% artış</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping mr-3"></div>
                  Son Dakika Teklifleri
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Kartvizit Baskısı - 5000 adet</span>
                    <span className="text-green-400 font-medium">₺450 onaylandı</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Rulo Etiket - 50cm x 1000m</span>
                    <span className="text-yellow-400 font-medium">₺1.250 beklemede</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Katalog Baskısı - 500 sayfa</span>
                    <span className="text-blue-400 font-medium">₺2.100 teklif alındı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm rounded-3xl border border-white/10"></div>
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-12">
              <div className="group text-center transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                    12.5K+
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div className="text-blue-100 font-medium text-sm lg:text-base mb-2">Aktif Müşteri</div>
                <div className="text-xs text-blue-200/80 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+15% bu ay</span>
                </div>
              </div>

              <div className="group text-center transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
                    750+
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-ping delay-100"></div>
                </div>
                <div className="text-blue-100 font-medium text-sm lg:text-base mb-2">Matbaa Partneri</div>
                <div className="text-xs text-blue-200/80 flex items-center justify-center">
                  <Building2 className="h-3 w-3 mr-1" />
                  <span>Türkiye geneli</span>
                </div>
              </div>

              <div className="group text-center transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
                    127K+
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-200"></div>
                </div>
                <div className="text-blue-100 font-medium text-sm lg:text-base mb-2">Tamamlanan Proje</div>
                <div className="text-xs text-blue-200/80 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  <span>Başarıyla teslim</span>
                </div>
              </div>

              <div className="group text-center transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <div className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                    4.9/5
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-300"></div>
                </div>
                <div className="text-blue-100 font-medium text-sm lg:text-base mb-2">Müşteri Puanı</div>
                <div className="text-xs text-blue-200/80 flex items-center justify-center">
                  <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                  <span>8.2K değerlendirme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 animate-gradient-slow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hemen Teklif Alın
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 kolay adımda profesyonel matbaa hizmetleri için teklif alın
            </p>
          </div>

          {/* 3 Card Layout: Quote Form + Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            {/* Teklif Formu Kartı */}
            <Card className="lg:col-span-1 hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gradient-to-br from-white via-indigo-50 to-purple-50 animate-gradient-slow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Teklif Formu Seç</CardTitle>
                <p className="text-gray-600">İhtiyacınıza uygun formu seçin ve detayları doldurun</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => {
                    try {
                      console.log('Navigating to sheet_label form');
                      window.location.href = "/quote/sheet_label";
                    } catch (error) {
                      console.error('Navigation error:', error);
                      alert('Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 text-left justify-start animate-gradient-fast"
                >
                  <LayoutGrid className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-bold">Tabaka Etiket</div>
                    <div className="text-sm opacity-90">A3/A4 tabaka halinde</div>
                  </div>
                </Button>

                <Button 
                  onClick={() => {
                    try {
                      console.log('Navigating to roll_label form');
                      window.location.href = "/quote/roll_label";
                    } catch (error) {
                      console.error('Navigation error:', error);
                      alert('Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 text-left justify-start animate-gradient-fast"
                >
                  <Disc className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-bold">Rulo Etiket</div>
                    <div className="text-sm opacity-90">Termal ve yapışkanlı</div>
                  </div>
                </Button>

                <Button 
                  onClick={() => {
                    try {
                      console.log('Navigating to general_printing form');
                      window.location.href = "/quote/general_printing";
                    } catch (error) {
                      console.error('Navigation error:', error);
                      alert('Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
                    }
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 text-left justify-start animate-gradient-fast"
                >
                  <Printer className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-bold">Genel Baskı</div>
                    <div className="text-sm opacity-90">Katalog, broşür, kartvizit</div>
                  </div>
                </Button>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center text-blue-700 mb-2">
                    <Target className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-sm">Hızlı Teklif Süreci</span>
                  </div>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• 5 dakikada form doldurma</li>
                    <li>• 24 saat içinde teklifler</li>
                    <li>• Karşılaştırmalı fiyatlar</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Fiyat Kartları Yan Yana */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Müşteri Paketi */}
              <Card className="relative bg-white border-2 border-blue-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Müşteri Paketi</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">KREDİLİ</span>
                    <p className="text-gray-600 mt-2">SİSTEM</p>
                    <p className="text-lg text-blue-600 font-semibold mt-2">Kullandığın kadar öde</p>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Sınırsız teklif alma</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>AI destekli tasarım (35₺/tasarım)</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>100MB dosya yükleme</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Gerçek zamanlı takip</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>7/24 canlı destek</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => window.location.href = "/customer-register"}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Hemen Başla
                  </Button>
                </CardContent>
              </Card>

              {/* Firma Paketi */}
              <Card className="relative bg-white border-2 border-orange-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Firma Paketi</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-orange-600">₺2999</span>
                    <p className="text-gray-600 mt-2">aylık abonelik</p>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-orange-600" />
                      </div>
                      <span>Yoğun müşteri portföyü</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-orange-600" />
                      </div>
                      <span>Gelişmiş analitik dashboard</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-orange-600" />
                      </div>
                      <span>Otomatik sipariş yönetimi</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-orange-600" />
                      </div>
                      <span>Müşteri CRM entegrasyonu</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-orange-600" />
                      </div>
                      <span>Premium öncelikli destek</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => window.location.href = "/printer-register"}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Matbaa Olarak Katıl
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Why Matbixx Section */}
      <section id="why-matbixx" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 animate-gradient-slow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-700 rounded-full px-6 py-3 mb-6 animate-gradient">
              <Award className="h-5 w-5 mr-2" />
              <span className="font-semibold">Neden Matbixx?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Matbaa Sektöründe 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Devrim</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Geleneksel matbaa süreçlerini dijital dönüşümle buluşturan <strong>Matbixx</strong>, 
              hem müşteriler hem de matbaa firmaları için tasarlanmış akıllı çözümlerle sektörü yeniden şekillendiriyor.
            </p>
          </div>

          {/* Müşteriler İçin Avantajlar */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <Users className="inline-block h-8 w-8 mr-3 text-blue-600" />
                Müşteriler İçin Avantajlar
              </h3>
              <p className="text-lg text-gray-600">Baskı ihtiyaçlarınızı dakikalar içinde profesyonel çözümlerle karşılayın</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Palette className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">AI Destekli Otomatik Tasarım</h3>
                  <p className="text-gray-600 mb-4">Yapay zeka ile saniyeler içinde profesyonel tasarımlar oluşturun. Boyut, renk ve tipografi otomatik optimize edilir.</p>
                  <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800 font-medium">
                    💡 35₺/tasarım - Tasarımcı maliyetinden %90 tasarruf
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Akıllı Teklif Karşılaştırması</h3>
                  <p className="text-gray-600 mb-4">10+ matbaadan anlık teklif alın, fiyat-kalite dengesini görün ve en uygun seçeneği belirleyin.</p>
                  <div className="bg-green-100 rounded-lg p-3 text-sm text-green-800 font-medium">
                    🎯 Ortalama %25 fiyat avantajı
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Hızlı Teslimat Garantisi</h3>
                  <p className="text-gray-600 mb-4">Gerçek zamanlı üretim takibi ile siparişinizin her aşamasını görün. Garantili teslimat süreleri.</p>
                  <div className="bg-purple-100 rounded-lg p-3 text-sm text-purple-800 font-medium">
                    ⚡ 24-72 saat express seçenekleri
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Matbaalar İçin Avantajlar */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <Building2 className="inline-block h-8 w-8 mr-3 text-orange-600" />
                Matbaa Firmaları İçin Avantajlar
              </h3>
              <p className="text-lg text-gray-600">İş hacminizi artırın, operasyonlarınızı optimize edin</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Müşteri Portföyü Genişletme</h3>
                  <p className="text-gray-600 mb-4">10.000+ aktif müşteri ağımıza erişin. Yeni müşteriler otomatik olarak size yönlendirilir.</p>
                  <div className="bg-orange-100 rounded-lg p-3 text-sm text-orange-800 font-medium">
                    📈 Ortalama %40 iş hacmi artışı
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full"></div>
                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Settings className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Otomatik İş Süreci Yönetimi</h3>
                  <p className="text-gray-600 mb-4">CRM entegrasyonu, otomatik faturalama ve sipariş takibi ile operasyonlarınızı dijitalleştirin.</p>
                  <div className="bg-teal-100 rounded-lg p-3 text-sm text-teal-800 font-medium">
                    ⚙️ %60 operasyonel verimlilik artışı
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden">

                <CardContent className="p-8 relative">
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Garantili Ödeme Sistemi</h3>
                  <p className="text-gray-600 mb-4">Tüm ödemeler Matbixx güvencesi altında. Sigortalı işler ve anında ödeme transferi.</p>
                  <div className="bg-indigo-100 rounded-lg p-3 text-sm text-indigo-800 font-medium">
                    🛡️ %100 ödeme garantisi
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 animate-gradient-slow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-gradient">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Teknolojik Üstünlük</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Teknoloji ile Güçlendirilmiş Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Matbaa sektöründe yeni nesil çözümler sunarak iş süreçlerinizi optimize ediyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Palette className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Destekli Tasarım</h3>
                <p className="text-gray-600">Yapay zeka teknolojisi ile profesyonel tasarımları dakikalar içinde oluşturun. Otomatik boyutlandırma ve renk uyumu.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Upload className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Gelişmiş Dosya Yönetimi</h3>
                <p className="text-gray-600">100MB'a kadar dosya yükleme, tüm format desteği ve bulut tabanlı güvenli saklama sistemi.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <BarChart3 className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Akıllı Teklif Sistemi</h3>
                <p className="text-gray-600">Birden fazla matbaadan teklif alın, fiyatları karşılaştırın ve en uygun seçeneği bulun.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Shield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Güvenli Ödeme</h3>
                <p className="text-gray-600">SSL sertifikası ve Stripe entegrasyonu ile güvenli ödeme. Kredili sistem ve esnek ödeme seçenekleri.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <Star className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Kalite Değerlendirme</h3>
                <p className="text-gray-600">Matbaa kalitesini değerlendirin, deneyimlerinizi paylaşın ve en iyi hizmeti seçin.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 animate-gradient-slow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-500 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                  <TrendingUp className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Gerçek Zamanlı Takip</h3>
                <p className="text-gray-600">Siparişinizin her aşamasını anlık olarak takip edin. SMS ve e-posta bildirimleri.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-50 animate-gradient-slow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-green-600 rounded-full px-4 py-2 mb-6 animate-gradient">
              <CreditCard className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Esnek Fiyatlandırma</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İhtiyacınıza Uygun Çözümler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteriler için kredili sistem, matbaalar için aylık abonelik. Şeffaf ve adil fiyatlandırma.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Customer Package */}
            <Card className="relative bg-white border-2 border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Müşteri Paketi</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">KREDİLİ</span>
                  <p className="text-gray-600 mt-2">SİSTEM</p>
                  <p className="text-lg text-blue-600 font-semibold mt-2">Kullandığın kadar öde</p>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span>Sınırsız teklif alma</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span>AI destekli otomatik tasarım (35₺/tasarım)</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span>100MB dosya yükleme</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span>Gerçek zamanlı sipariş takibi</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span>7/24 canlı destek</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => window.location.href = "/payment?plan=customer"}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Hemen Başla
                </Button>
              </CardContent>
            </Card>

            {/* Firm Package */}
            <Card className="relative bg-white border-2 border-orange-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Firma Paketi</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-orange-600">₺2999</span>
                  <p className="text-gray-600 mt-2">aylık abonelik</p>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span>Yoğun müşteri portföyü yönetimi</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span>Gelişmiş analitik dashboard</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span>Otomatik sipariş ve teklif yönetimi</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span>Müşteri CRM entegrasyonu</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span>Premium öncelikli destek</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => window.location.href = "/payment?plan=firm"}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Ödeme Yap
                </Button>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 animate-gradient-slow text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Matbixx</span>
              </div>
              <p className="text-gray-400 mb-4">
                Matbaa sektöründe dijital dönüşümü sağlayan yenilikçi B2B platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Etiket Baskı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Katalog Baskı</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kartvizit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Otomatik Tasarım</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kariyer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Destek</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Matbixx. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}