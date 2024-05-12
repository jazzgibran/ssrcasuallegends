const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          <p className="text-gray-700 mb-6">
            Please read these terms of service carefully before using our game.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing or using our game, you agree to be bound by these terms of service and our
            privacy policy.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">2. Use License</h2>
          <p className="text-gray-700 mb-6">
            Permission is granted to temporarily download one copy of the game for personal,
            non-commercial transitory viewing only.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">3. Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            The game is provided on an 'as is' basis. We make no warranties, expressed or implied,
            and hereby disclaim and negate all other warranties including, without limitation,
            implied warranties or conditions of merchantability.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">4. Limitations</h2>
          <p className="text-gray-700 mb-6">
            In no event shall we be liable for any damages arising out of the use or inability to
            use the game.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">5. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of
            [your country], and you irrevocably submit to the exclusive jurisdiction of the courts
            in that state or location.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
