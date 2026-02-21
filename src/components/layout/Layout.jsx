import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, X, MessageCircle, Mic, Image as ImageIcon, BookOpen, GraduationCap, FileText, BarChart, Calendar, Sun, Moon, HelpCircle, UploadCloud, Play, CheckCircle, Search, Clock, List } from 'lucide-react';

const FEATURES_LIST = [
    { name: 'AI Avatar', icon: MessageCircle },
    { name: 'AI Doubt Solver', icon: HelpCircle },
    { name: 'Notes Generator', icon: FileText },
    { name: 'Exam Preparation', icon: GraduationCap },
    { name: 'Performance Analysis', icon: BarChart },
    { name: 'Study Planner', icon: Calendar },
];

const AIAvatarView = () => (
    <div className="flex flex-col h-full items-center justify-center max-w-2xl mx-auto w-full gap-8 mt-10">
        <div className="w-40 h-40 rounded-full bg-brand-primary/10 flex items-center justify-center relative shadow-[0_0_40px_rgba(39,116,132,0.2)]">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Avatar" className="w-32 h-32 absolute animate-pulse" alt="AI Avatar" />
        </div>
        <div className="text-center w-full">
            <h3 className="text-xl font-bold text-brand-text mb-2">How can I help you today?</h3>
            <p className="text-brand-muted text-sm mb-8">Type a question or speak directly to your AI Avatar.</p>
            <div className="relative w-full flex items-center shadow-sm rounded-full bg-white border border-gray-200 p-2 pl-6">
                <Search className="w-5 h-5 text-gray-400 absolute left-6" />
                <input type="text" placeholder="Ask me anything..." className="w-full outline-none bg-transparent pl-8 pr-12 text-sm text-brand-text font-medium h-10" />
                <button className="bg-brand-primary text-white p-3 rounded-full hover:scale-105 transition-transform shadow-md ml-2 shrink-0">
                    <Mic className="w-5 h-5 fill-current" />
                </button>
            </div>
        </div>
    </div>
);

const AIDoubtSolverView = ({ setSelectedFeature }) => (
    <div className="flex flex-col h-full max-w-4xl mx-auto w-full gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: 'Upload Notebook', desc: 'Scan your handwritten notes', icon: UploadCloud },
                { title: 'Upload Image', desc: 'Snap a picture of a problem', icon: ImageIcon },
                { title: 'Voice Assistant', desc: 'Explain your doubt aloud', icon: Mic }
            ].map((opt, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-[24px] shadow-sm hover:border-brand-primary/30 hover:shadow-md transition-all gap-4 group">
                    <div className="bg-brand-primary/5 p-4 rounded-full text-brand-primary group-hover:scale-110 transition-transform">
                        <opt.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-brand-text mb-1">{opt.title}</h4>
                        <p className="text-xs text-brand-muted">{opt.desc}</p>
                    </div>
                </button>
            ))}
        </div>
        <div className="bg-brand-primary/5 rounded-[24px] p-8 flex-1 border border-brand-primary/10 flex flex-col items-center justify-center text-center">
            <HelpCircle className="w-12 h-12 text-brand-primary/40 mb-4" />
            <h3 className="text-lg font-bold text-brand-text mb-2">Awaiting your doubt</h3>
            <p className="text-sm text-brand-muted max-w-md mb-8">Upload a problem or ask via voice to receive a detailed step-by-step explanation.</p>
            <button
                onClick={() => setSelectedFeature('Notes Generator')}
                className="bg-brand-primary text-white px-6 py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#1a5563] transition-colors flex items-center gap-2"
            >
                <FileText className="w-4 h-4" /> Generate Notes from Output
            </button>
        </div>
    </div>
);

const NotesGeneratorView = () => (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full gap-8">
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm">
            <label className="text-sm font-bold text-brand-text mb-2 block">What topic do you want to learn?</label>
            <div className="flex gap-4">
                <input type="text" placeholder="e.g. Thermodynamics laws, French Revolution..." className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
            </div>
        </div>
        <div>
            <h3 className="text-sm font-bold text-brand-text mb-4">Select Output Format</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['PPT', 'Video', 'Audio', 'PDF', 'Graphs'].map((fmt, i) => (
                    <button key={i} className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-colors shadow-sm gap-2">
                        {fmt === 'PPT' && <FileText className="w-6 h-6 text-orange-500" />}
                        {fmt === 'Video' && <Play className="w-6 h-6 text-red-500" />}
                        {fmt === 'Audio' && <Mic className="w-6 h-6 text-purple-500" />}
                        {fmt === 'PDF' && <FileText className="w-6 h-6 text-blue-500" />}
                        {fmt === 'Graphs' && <BarChart className="w-6 h-6 text-green-500" />}
                        <span className="text-xs font-bold text-brand-text mt-1">{fmt}</span>
                    </button>
                ))}
            </div>
        </div>
        <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow mt-auto">
            Generate Content
        </button>
    </div>
);

const ExamPreparationView = () => (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full gap-8">
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 flex justify-between items-end mb-2">
                <div>
                    <h3 className="text-lg font-bold text-brand-text">Select Difficulty Level</h3>
                    <p className="text-xs text-brand-muted">Customize your test generation</p>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-bold text-sm">
                    <Clock className="w-4 h-4" /> 45:00 Timer
                </div>
            </div>
            {['Easy', 'Normal', 'Hard'].map((lvl) => (
                <button key={lvl} className={`p-6 rounded-[24px] border-2 font-bold text-lg transition-all ${lvl === 'Normal' ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-300'}`}>
                    {lvl}
                </button>
            ))}
        </div>
        <div className="bg-white rounded-[24px] border border-gray-100 p-8 shadow-sm flex-1 flex flex-col items-center justify-center text-center">
            <List className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-brand-text mb-2">Ready to start?</h3>
            <p className="text-sm text-brand-muted max-w-sm mb-6">The AI will generate a custom exam based on your recent topics and selected difficulty.</p>
            <button className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold shadow-md hover:bg-[#1a5563] transition-colors">
                Generate & Start Test
            </button>
        </div>
    </div>
);

const PerformanceAnalysisView = () => (
    <div className="flex flex-col w-full gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col justify-center">
                <p className="text-xs font-bold text-brand-muted mb-1">Overall Accuracy</p>
                <h2 className="text-4xl font-black text-brand-text">84% <span className="text-sm text-green-500 font-bold ml-2">↑ 3%</span></h2>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-brand-muted mb-3">Strong Subjects</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Biology</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">History</span>
                </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-brand-muted mb-3">Weak Subjects</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Physics</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Math</span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex-1 min-h-[300px]">
            <h3 className="text-sm font-bold text-brand-text mb-6">Learning Progress over Time</h3>
            <div className="flex items-end justify-between h-48 px-4 border-b border-gray-100 pb-2 gap-2">
                {[40, 55, 48, 65, 70, 84, 80].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group flex-1 h-full justify-end relative">
                        <div className="w-full max-w-[40px] bg-brand-primary/20 rounded-t-sm group-hover:bg-brand-primary transition-colors relative" style={{ height: `${h}%` }}>
                            {i === 5 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded">Peak</div>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between px-4 mt-2 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day} className="text-[10px] font-bold text-gray-400 flex-1 text-center">{day}</span>
                ))}
            </div>
        </div>
    </div>
);

const StudyPlannerView = () => (
    <div className="flex flex-col md:flex-row h-full w-full gap-8">
        <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-brand-text mb-4">Set New Goal</h3>
                <div className="flex gap-3">
                    <input type="text" placeholder="e.g. Finish Chapter 4 Physics" className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary" />
                    <button className="bg-brand-primary text-white px-4 py-2 rounded-xl text-sm font-bold">Add</button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex-1">
                <h3 className="text-sm font-bold text-brand-text mb-4">Task List</h3>
                <div className="flex flex-col gap-3">
                    {[
                        { task: 'Review Thermodynamics formulas', time: '10:00 AM', done: true },
                        { task: 'Complete Math Quiz 2', time: '02:00 PM', done: false },
                        { task: 'Read History Essay', time: '05:30 PM', done: false },
                    ].map((t, i) => (
                        <div key={i} className={`flex items-center gap-4 p-3 rounded-xl border ${t.done ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-brand-primary/20 shadow-sm'}`}>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${t.done ? 'border-green-500 bg-green-500' : 'border-gray-300'}`}>
                                {t.done && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <div className="flex-1">
                                <p className={`text-sm font-bold ${t.done ? 'line-through text-gray-400' : 'text-brand-text'}`}>{t.task}</p>
                                <p className="text-[10px] font-semibold text-brand-muted">{t.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="w-full md:w-[320px] bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 flex flex-col shrink-0">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-brand-text">October</h3>
                <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded text-brand-text"><ChevronLeft className="w-4 h-4" /></button>
                    <button className="p-1 hover:bg-gray-100 rounded text-brand-text rotate-180"><ChevronLeft className="w-4 h-4" /></button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="text-[10px] font-bold text-gray-400">{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className={`aspect-square flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer ${i + 1 === 14 ? 'bg-brand-primary text-white shadow-md' : i + 1 === 18 ? 'bg-orange-100 text-orange-600' : 'text-brand-text hover:bg-gray-50'}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Layout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activePage, setActivePage] = useState('dashboard');
    const [selectedFeature, setSelectedFeature] = useState(FEATURES_LIST[0].name);

    useEffect(() => {
        if (location.pathname === '/app') {
            setActivePage('dashboard');
        }
    }, [location.pathname]);

    return (
        <div className="flex h-screen w-full bg-brand-bg text-brand-text font-sans antialiased overflow-hidden p-4 gap-4 relative">
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Top Header */}
                <header className="flex items-center justify-between px-6 py-4 text-white shrink-0 z-30">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 font-medium text-sm"
                    >
                        <div className="bg-white text-brand-bg rounded-full p-1 border border-white shadow-sm">
                            <ChevronLeft className="w-3 h-3" strokeWidth={3} />
                        </div>
                        Back
                    </button>

                    <nav className="flex items-center gap-8 justify-center absolute left-1/2 -translate-x-1/2">
                        {['Dashboard', 'Features', 'Settings'].map((item) => {
                            const pageKey = item.toLowerCase();
                            return (
                                <button
                                    key={item}
                                    onClick={() => {
                                        setActivePage(pageKey);
                                        if (pageKey === 'dashboard' && location.pathname !== '/app') {
                                            navigate('/app');
                                        }
                                    }}
                                    className={`text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 ${activePage === pageKey ? 'text-white border-b-2 border-brand-accent pb-1' : 'text-white/60 hover:text-white'}`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <img
                                    key={i}
                                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=User${i}&backgroundColor=f4f0ec`}
                                    className="w-8 h-8 rounded-full border-2 border-brand-bg"
                                    alt="User"
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-white/80">12 members</span>
                    </div>
                </header>

                {/* Main Content Area - White Box */}
                <div className="flex-1 flex overflow-hidden relative">

                    {/* Left Features Sidebar Panel */}
                    <div
                        className={`bg-brand-surface rounded-[40px] shadow-2xl overflow-hidden shrink-0 flex flex-col border border-gray-100 transition-all duration-500 ease-in-out ${activePage === 'features'
                            ? 'w-[280px] opacity-100 mr-4'
                            : 'w-0 opacity-0 mr-0 border-none'
                            }`}
                    >
                        <div className="p-6 w-[280px] h-full overflow-y-auto">
                            <h2 className="text-xl font-bold mb-6 text-brand-text px-2">Features</h2>
                            <div className="flex flex-col gap-2">
                                {FEATURES_LIST.map((feat) => (
                                    <button
                                        key={feat.name}
                                        onClick={() => setSelectedFeature(feat.name)}
                                        className={`flex items-center gap-3 p-3 text-left rounded-2xl transition-all duration-300 hover:scale-[1.02] min-w-[200px] ${selectedFeature === feat.name ? 'bg-brand-primary text-white shadow-md' : 'text-brand-text/70 hover:bg-gray-100 font-medium'}`}
                                    >
                                        <feat.icon className="w-5 h-5 shrink-0" />
                                        <span className="text-sm truncate">{feat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <main className="flex-1 overflow-y-auto w-full bg-brand-surface rounded-[40px] shadow-2xl relative scroll-smooth p-8 border border-gray-100 flex flex-col transition-all duration-300">
                        {activePage === 'features' ? (
                            <div className="w-full h-full flex flex-col animate-fade-in">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 shrink-0">
                                    <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary shadow-sm">
                                        {React.createElement(FEATURES_LIST.find(f => f.name === selectedFeature)?.icon || MessageCircle, { className: "w-8 h-8 animate-slide-up" })}
                                    </div>
                                    <div className="animate-slide-in-left">
                                        <h1 className="text-3xl font-bold text-brand-text mb-1">{selectedFeature}</h1>
                                        <p className="text-sm font-medium text-brand-text/50">Explore capabilities of the {selectedFeature} module.</p>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto w-full pb-10">
                                    {selectedFeature === 'AI Avatar' && <AIAvatarView />}
                                    {selectedFeature === 'AI Doubt Solver' && <AIDoubtSolverView setSelectedFeature={setSelectedFeature} />}
                                    {selectedFeature === 'Notes Generator' && <NotesGeneratorView />}
                                    {selectedFeature === 'Exam Preparation' && <ExamPreparationView />}
                                    {selectedFeature === 'Performance Analysis' && <PerformanceAnalysisView />}
                                    {selectedFeature === 'Study Planner' && <StudyPlannerView />}
                                </div>
                            </div>
                        ) : activePage === 'settings' ? (
                            <div className="w-full h-full overflow-hidden flex flex-col bg-brand-surface animate-fade-in">
                                <div className="w-full h-full max-w-3xl mx-auto flex flex-col gap-8 animate-fade-in py-8 px-4">
                                    <div>
                                        <h1 className="text-3xl font-bold text-brand-text mb-2">Settings</h1>
                                        <p className="text-brand-muted text-sm">Manage your account preferences and app configurations.</p>
                                    </div>

                                    <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8 flex flex-col gap-8">
                                        {/* Explanation Mode */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="text-base font-bold text-brand-text">Explanation Mode</label>
                                                <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer shadow-inner transition-colors duration-300">
                                                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300" />
                                                </div>
                                            </div>
                                            <p className="text-xs text-brand-muted font-medium">Toggle detailed step-by-step explanations.</p>
                                        </div>

                                        <hr className="border-gray-100" />

                                        {/* Knowledge Difficulty */}
                                        <div>
                                            <label className="text-base font-bold text-brand-text block mb-4">Knowledge Difficulty</label>
                                            <div className="flex items-center bg-gray-50 p-1.5 rounded-2xl w-full border border-gray-200 shadow-inner">
                                                <button className="flex-1 py-3 text-sm font-bold bg-white shadow-md rounded-xl text-brand-text transition-all duration-300 hover:scale-105">Easy</button>
                                                <button className="flex-1 py-3 text-sm font-bold text-brand-muted hover:text-brand-text transition-all duration-300 hover:scale-105">Medium</button>
                                                <button className="flex-1 py-3 text-sm font-bold text-brand-muted hover:text-brand-text transition-all duration-300 hover:scale-105">Hard</button>
                                            </div>
                                        </div>

                                        <hr className="border-gray-100" />

                                        {/* Dark Mode */}
                                        <div>
                                            <label className="text-base font-bold text-brand-text block mb-4">Appearance</label>
                                            <div className="flex gap-4">
                                                <button className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-brand-primary bg-brand-primary/5 text-brand-primary font-bold text-sm gap-3 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                    <div className="p-3 bg-white rounded-full"><Sun className="w-6 h-6 text-brand-primary animate-fade-in" /></div>
                                                    Light Mode
                                                </button>
                                                <button className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-gray-100 hover:bg-gray-50 text-gray-400 font-bold text-sm gap-3 transition-all duration-300 hover:scale-105 hover:shadow-md">
                                                    <div className="p-3 bg-gray-100 rounded-full"><Moon className="w-6 h-6 text-brand-muted animate-fade-in" /></div>
                                                    Dark Mode
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            children
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Layout;
