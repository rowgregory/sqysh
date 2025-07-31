export const getChangelogVersions = (versions: any) => {
  const totalReleases = versions.length;

  let featuresAdded = 0;
  let bugsSquashed = 0;
  let improvementsMade = 0;

  versions.forEach(
    (version: {
      changes: {
        features: string | any[];
        fixes: string | any[];
        improvements: string | any[];
      };
    }) => {
      if (version.changes.features) {
        featuresAdded += version.changes.features.length;
      }
      if (version.changes.fixes) {
        bugsSquashed += version.changes.fixes.length;
      }
      if (version.changes.improvements) {
        improvementsMade += version.changes.improvements.length;
      }
    }
  );

  return {
    totalReleases,
    featuresAdded,
    bugsSquashed,
    improvementsMade,
  };
};
