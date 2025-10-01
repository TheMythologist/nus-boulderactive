function CompetitionCard({
  category,
  qualifying,
  semiFinals,
  finals,
  isTeam = false,
}: {
  category: string;
  qualifying: string;
  semiFinals: string;
  finals: string;
  isTeam?: boolean;
}) {
  return (
    <div className="border border-border rounded-lg p-4 bg-card">
      <h3 className="font-semibold text-lg mb-3 text-card-foreground">{category}</h3>
      {isTeam ? (
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-muted-foreground">All Rounds:</span>
            <span className="text-sm">{qualifying}</span>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-sm font-medium text-muted-foreground">Qualifying:</span>
            <span className="text-sm">{qualifying}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-sm font-medium text-muted-foreground">Semi-Finals:</span>
            <span className="text-sm">{semiFinals}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-muted-foreground">Finals:</span>
            <span className="text-sm">{finals}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RulesAndFormatsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Rules and Formats</h1>
            <p className="text-lg text-muted-foreground">
              NUS BoulderActive 2025 Competition Rules and Regulations
            </p>
            <p className="text-xs text-muted-foreground">Updated as of 27 September 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                The rules and regulations contained herein shall be known as the{' '}
                <strong>BA25 Rules</strong> and shall be read in conjunction with the International
                Federation of Sport Climbing (IFSC) Rules and Regulations. In the event of conflicts
                between the BA25 Rules and the IFSC Rules and Regulations, the BA25 Rules shall
                prevail.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Categories and Eligibility
              </h2>

              <p className="mb-6">
                NUS BoulderActive 2025 will organise the following categories with the respective
                eligibility:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">
                        Competitive Category
                      </th>
                      <th className="border border-border p-3 text-left font-semibold">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Novice</td>
                      <td className="border border-border p-3">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>
                            Competitors must not have been finalists in the Novice, Intermediate or
                            Open categories of previous competitions.
                          </li>
                          <li>
                            National (Boulder/Lead) climbers from the senior team are not allowed to
                            join this category.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">Intermediate</td>
                      <td className="border border-border p-3">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>
                            Competitors must not have been amongst the top 3 positions in the
                            Intermediate category of previous competitions.
                          </li>
                          <li>
                            Competitors must not have been a finalist in the Open category of
                            previous competitions.
                          </li>
                          <li>
                            National (Boulder/Lead) climbers from the senior team are not allowed to
                            join this category.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Open</td>
                      <td className="border border-border p-3">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>All are welcome!</li>
                          <li>
                            National (Boulder/Lead) climbers from the senior team can only join this
                            category.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-medium">Team</td>
                      <td className="border border-border p-3">
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Each team can have a maximum of 4 people.</li>
                          <li>No gender restriction per team.</li>
                          <li>
                            Teams can have a total of 6 points - 1 point for Novice, 2 points for
                            Inter, 3 points for Open.
                          </li>
                          <li>
                            Females have a score multiplier of <strong>1.25</strong>, while Open
                            climbers have a score mulitplier of <strong>0.75</strong>.
                          </li>
                          <li>
                            National (Boulder/Lead) climbers from the senior team can join this
                            category.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-sm font-medium text-yellow-800">
                  <strong>Important:</strong> Any competitor found to have registered and competed
                  in any category he/she is ineligible for will immediately be disqualified and
                  moved to a higher category. International climbers may contact the Organisers for
                  clarification on category eligibility.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Competition Format and Score
              </h2>

              <p className="mb-6">
                The competition formats to be used for the different categories in each round of
                competition are as follows:
              </p>

              {/* Mobile-first responsive table */}
              <div className="space-y-4">
                {/* Desktop table view - hidden on mobile */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-semibold">
                          Category
                        </th>
                        <th className="border border-border p-3 text-left font-semibold">
                          Qualifying
                        </th>
                        <th className="border border-border p-3 text-left font-semibold">
                          Semi-Finals
                        </th>
                        <th className="border border-border p-3 text-left font-semibold">Finals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-medium">Novice</td>
                        <td className="border border-border p-3">Flash</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Rotation</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border p-3 font-medium">Intermediate</td>
                        <td className="border border-border p-3">Flash</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Rotation</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-medium">Open</td>
                        <td className="border border-border p-3">Session</td>
                        <td className="border border-border p-3">Rotation</td>
                        <td className="border border-border p-3">IFSC Concurrent</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border p-3 font-medium">Team</td>
                        <td className="border border-border p-3 text-center" colSpan={3}>
                          Team Rotation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile card view - visible only on mobile */}
                <div className="md:hidden space-y-4">
                  <CompetitionCard
                    category="Novice"
                    qualifying="Flash"
                    semiFinals="Session"
                    finals="Rotation"
                  />
                  <CompetitionCard
                    category="Intermediate"
                    qualifying="Flash"
                    semiFinals="Session"
                    finals="Rotation"
                  />
                  <CompetitionCard
                    category="Open"
                    qualifying="Session"
                    semiFinals="Rotation"
                    finals="IFSC Concurrent"
                  />
                  <CompetitionCard
                    category="Team"
                    qualifying="Team Rotation"
                    semiFinals="Team Rotation"
                    finals="Team Rotation"
                    isTeam={true}
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Specific rules on climbing are detailed in the Technical Climbing Rules section
                below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Flash Format & Scoring</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    Each detail will have a minimum of 12 climbers and a maximum of 20 climbers.
                  </li>
                  <li>
                    Climbers within each detail will enter the competition zone together at their
                    designated time respectively.
                  </li>
                  <li>
                    There will be a demonstration climb before the commencement of the competition.
                  </li>
                  <li>
                    Participants will be given <strong>19 minutes</strong> to climb the routes.
                  </li>
                  <li>Participants may attempt the boulder problems in any order.</li>
                  <li>
                    Demonstration climbs will be posted on Instagram before the start of the
                    competition.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Session Format & Scoring</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>Each detail will have a maximum of 20 climbers.</li>
                  <li>
                    Competitors will be isolated in the isolation zone before the commencement of
                    the route setting for the event.
                  </li>
                  <li>Participants may attempt the boulder problems in any order</li>
                  <li>
                    Participants will be given <strong>30 minutes</strong> to climb the routes.
                  </li>
                  <li>There will be no demonstration climb.</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Rotation Format & Scoring</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    A designated pair of 1 male and 1 female competitor shall climb simultaneously
                    on their individual routes.
                  </li>
                  <li>
                    Each pair is to attempt all 3 routes in the order set out in the official start
                    list.
                  </li>
                  <li>
                    Competitors shall be given <strong>4 minutes</strong> to attempt each route,
                    with no additional time to be given to complete climbing.
                  </li>
                  <li>
                    Competitors shall be given a mandatory rest time of <strong>4 minutes</strong>{' '}
                    between routes, during which no observation of other routes shall be allowed.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                IFSC Concurrent Format & Scoring
              </h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    Before the start of the round, competitors will be given an{' '}
                    <strong>observation period of two minutes per route</strong>. During this
                    period, competitors may touch (only) the marked Starting Holds and are
                    prohibited from using any recording equipment.
                  </li>
                  <li>
                    Competitors shall attempt all 4 routes in the order set out in the official
                    start list.
                  </li>
                  <li>
                    Competitors shall be given <strong>4 minutes</strong> to attempt each route,
                    with no additional time to be given to complete climbing.
                  </li>
                  <li>
                    Upon completion of the route or after 4 minutes have elapsed (whichever is
                    sooner), climbers will return to the isolation zone.
                  </li>
                  <li>
                    The next competitor shall commence climbing only 4 minutes after the previous
                    competitor has started climbing.
                  </li>
                  <li>Scoring shall be based on the IFSC format of tops, attempts and zones.</li>
                  <li>
                    Manpower from the BoulderActive committee will be present (route judges and key
                    committee members).
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Team Rotation Format & Scoring
              </h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    Each team will attempt all the boulder problems, in the prescribed order, with a
                    total of <strong>5 minutes</strong> for all 4 members to attempt to top each
                    problem.
                  </li>
                  <li>All members of the team must move together to each boulder problem.</li>
                  <li>
                    Each competitor is only allowed to clock a maximum of 1 Top and 1 Zone per
                    route, regardless of the number of team members.
                  </li>
                  <li>
                    Demonstration climbs will be posted on Instagram before the start of the
                    competition.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Qualification Rules</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Semi-Finals Qualification
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      The <strong>24 highest-scoring competitors</strong> in their respective gender
                      categories of the Intermediate/Open category and the <strong> 20 highest-scoring
                      competitors </strong> in each gender category of the Novice category shall proceed to the semi-final rounds.
                    </li>
                    <li>
                      If there are more than 24 participants (or 20 participants) who are eligible to proceed to the
                      semi-finals, e.g. there are 3 participants in 24th place with the same scores,
                      all will proceed to the semi-finals.
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">Finals Qualification</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      The <strong>10 competitors</strong> (for Novice) and{' '}
                      <strong>8 competitors</strong> (for Intermediate and Open) with the highest
                      scores will proceed to the finals.
                    </li>
                    <li>
                      In the case of a tie, the tiebreaker mechanism shall be applied with respect
                      to the number of points accumulated in the semi-finals or qualifiers.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Tiebreaker Rules</h4>
                <p className="text-sm text-yellow-700">
                  In the case of a tie where competitors have the same total qualifying score, a
                  tiebreaker will be applied by comparing the number of points allocated to each
                  competitor&apos;s highest scoring top. The tiebreaker operates in favour of the
                  competitor whose highest scoring top yields the greatest number of points. Should
                  competitors&apos; highest scoring top be the same, the next highest scoring top
                  will be considered, and so on until there is a difference between the tied
                  competitors. If competitors remain tied after considering all previous rounds, the
                  tie will stand, and competitors will share the same rank.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Technical Climbing Rules</h2>

              <div className="text-sm text-muted-foreground mb-4">
                <p>
                  These Guidelines are adapted from the IFSC Rules, which may be found online at:{' '}
                  <a
                    href="https://images.ifsc-climbing.org/ifsc/image/private/t_q_good/prd/s3ihxcisocdpc8ty6mtg.pdf"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    IFSC Rules 2025
                  </a>
                  . Terms used in these Guidelines are as defined in the IFSC Rules.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Starting the Boulder Problem</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      A stable &apos;4-point&apos; starting position will be adopted for each
                      problem.
                    </li>
                    <li>
                      The competitor must achieve a stable Controlled position with both hands and
                      both feet on the Starting Holds without Controlling or Using any other
                      Artificial Holds or Structures.
                    </li>
                    <li>
                      4 strips of tape with a colour similar to the Top hold(s) of the problem will
                      be used to indicate the placement of the designated starting points.
                    </li>
                    <li>
                      Utilising 3 of the designated 4 starting points to assume the 4-point starting
                      position is permitted.
                    </li>
                    <li>
                      A competitor&apos;s attempt will be deemed to have started when every part of
                      the competitor&apos;s body has left the ground.
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Zones</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      There will be a Zone for each boulder problem, indicated by Zone hold(s)
                      marked with strips of tape with a colour different from the 4 tapes used to
                      indicate the starting points.
                    </li>
                    <li>If there is one Zone hold, there will be one strip of tape.</li>
                    <li>
                      Zone will only be awarded when the hold is used in an &quot;Establishing Movement&quot;. This is up to the discretion of the route
                      judge.
                    </li>
                    <li>An &quot;Establishing Movement&quot; will be considered successful when a climber has a clear grasp of a hold and is able to make a movement consolidating their position with that hold (e.g. transferring their weight onto that hold).</li>
                    <li>
                      If the climber skips the zone entirely (does not show that he is in control of
                      the zone), and fails to top the route but progressed beyond the zone, he will
                      not be awarded the zone.
                    </li>
                    <li>
                      Participants can check with the route judge if they are unsure if they have
                      been awarded the zone.
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Ending the Boulder Problem</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      If there is one Top hold, there will be 1 strip of tape. Competitors will need
                      to end the problem with two hands securely on that hold.
                    </li>
                    <li>
                      If there are two Top holds, there will be one strip of tape on each hold.
                      Competitors need to have one hand on each hold simultaneously to end the
                      problem.
                    </li>
                    <li>
                      The Route Judge will announce to the climber with gestures to confirm the top.
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Boundaries & Time-keeping</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Boundaries will be marked with black tape.</li>
                    <li>
                      Competitors must not come into contact with any hold, volume or part of the
                      wall positioned beyond the boundaries of the problem they are attempting.
                    </li>
                    <li>Competitors must not come into contact with the black tape.</li>
                    <li>Side panels of the wall can be used if there is no boundary tape.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-muted rounded">
                    <p className="text-sm font-medium">Time-keeping Signals:</p>
                    <ul className="list-disc list-inside text-sm mt-2">
                      <li>Double whistle – Start and end of Climb</li>
                      <li>Single whistle – 1 minute till end of Climb</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Appeals Process</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Appeal Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        All Appeals must be made within <strong>15 minutes</strong> of publication
                        of the Official Results of that round.
                      </li>
                      <li>All Appeals must be made in the English language.</li>
                      <li>Appeals must be presented to the Chief Route Judge.</li>
                      <li>Appeals must be made in writing and accompanied by video evidence.</li>
                      <li>
                        Appeals must be accompanied by the relevant Appeal Fee of{' '}
                        <strong>$50</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Appeal Outcomes</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        <strong>Invalid:</strong> Appeal Fee and letter returned, marked as invalid.
                      </li>
                      <li>
                        <strong>Successful:</strong> Appeal Fee returned and Original Decision
                        changed.
                      </li>
                      <li>
                        <strong>Unsuccessful:</strong> Appeal Fee forfeited and Original Decision
                        stands.
                      </li>
                      <li>
                        <strong>Undetermined:</strong> If evidence is inconclusive, Original
                        Decision stands and Appeal Fee returned.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Competitor Responsibilities
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Personal Responsibility
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      All competitors are expected to be fit and ready to compete when they register
                      on the competition day.
                    </li>
                    <li>
                      While the Organisers will ensure that the safety standards are met, all
                      competitors are reminded to take care of their own safety when they compete.
                    </li>
                    <li>
                      All competitors are strongly encouraged to have personal accident insurance
                      prior to participating as they will bear all medical expenses incurred during
                      the course of the competition, including hospital evacuation.
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Registration & Call Zones
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>
                      On the event day, all competitors are expected to register within the
                      stipulated time before the start of their scheduled categories to avoid
                      immediate disqualification.
                    </li>
                    <li>
                      The Organisers retain full discretion in deciding whether to permit latecomers
                      to compete.
                    </li>
                    <li>No additional warm-up time will be provided.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Isolation Zone Rules</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    Once the closure of the isolation zone is announced, only competitors eligible
                    to compete in that round are allowed to enter the isolation zone.
                  </li>
                  <li>
                    If competitors would like to leave the isolation zone for any reason, they must
                    inform the Isolation IC or risk disqualification.
                  </li>
                  <li>
                    While in the isolation zone, competitors are allowed to communicate only with
                    other competitors within the isolation zone and event officials.
                  </li>
                  <li>
                    <strong>The use of mobile phones will NOT be permitted</strong> in the isolation
                    zone.
                  </li>
                  <li>
                    Any attempts at outside communication will result in immediate disqualification.
                  </li>
                  <li>
                    In the event that there is a need for communication in emergency situations,
                    competitors are required to alert the event officials. For the duration of the
                    call, competitors are required to turn on their phones&apos; loudspeakers.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Discipline and Conduct</h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Official Warnings</h3>
                  <p className="text-sm mb-3">
                    An official warning may be issued for any of the following infringements:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Infringements committed in the Competition Area by a competitor</li>
                    <li>Unsporting behaviour of a relatively minor nature</li>
                    <li>
                      Use of obscene or abusive language or behaviour of a relatively mild nature
                    </li>
                    <li>Failure to obey instructions from any NUS BoulderActive Official</li>
                    <li>
                      Undue delay in returning to the Isolation Zone/Warm-Up Area upon instructions
                    </li>
                    <li>Failure to start in accordance with the Route Judge&apos;s instructions</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-800">
                    Immediate Disqualification
                  </h3>
                  <p className="text-sm mb-3 text-red-700">
                    The following infringements shall result in immediate disqualification:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                    <li>
                      Communication with any person outside the Competition Area during isolation
                      conditions
                    </li>
                    <li>
                      Distracting or interfering with any competitor who is preparing for or
                      attempting a route
                    </li>
                    <li>Failing to comply with the instructions of judges or organisers</li>
                    <li>Unsporting behaviour or causing serious disturbance during competition</li>
                    <li>
                      Abusive, threatening or violent behaviour towards officials, organisers,
                      competitors or any other person
                    </li>
                    <li>Usage of non-approved equipment</li>
                    <li>Breaking any Singapore laws</li>
                  </ul>
                  <p className="text-sm mt-3 text-red-700 font-medium">
                    Note: The issuance of 2 official warnings to the same person in one competition
                    shall result in immediate disqualification.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Rights of the Organisers</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    The Organisers of NUS BoulderActive reserve the right to decide who shall
                    participate in the competition or to disqualify any competitor at any time and
                    to amend these Rules and Regulations as they deem necessary without notice.
                  </li>
                  <li>
                    Any other matters not provided for in these Rules and Regulations shall be
                    decided by the Organisers at their own discretion.
                  </li>
                </ul>
              </div>
            </section>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                For any questions or clarifications regarding these rules, please contact the NUS
                BoulderActive organising committee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
